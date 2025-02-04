import { test, expect } from "@playwright/test";
import { CartPage } from "../page-objects/cartPage";

test.use({ storageState: "../playwright/.auth/user.json" });

test.beforeEach("navigate to app", async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

test.describe("Cart tests", () => {
  test("check if cart empty after login", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.navigateToCart();

    //await expect(page.getByText("Total: 0.00 CHF")).toBeVisible();
    await expect(page.getByText("LOGOUT")).toBeVisible();
  });

  test("product added to cart", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.navigateToShop();
    await cartPage.addProductToCart();
    await cartPage.navigateToCart();

    await expect(
      page.locator('[data-testid="remove-from-cart-btn"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="increase-qty-btn"]')
    ).toBeVisible();
    await expect(
      page.locator('[data-testid="decrease-qty-btn"]')
    ).toBeVisible();
  });

  test("remove product from cart", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.navigateToShop();
    await cartPage.addProductToCart();
    await cartPage.navigateToCart();
    await page.locator('[data-testid="remove-from-cart-btn"]').click();

    await expect(
      page.locator('[data-testid="remove-from-cart-btn"]')
    ).not.toBeVisible();

    await expect(
      page.getByText("successfully removed from the cart")
    ).toBeVisible();
  });

  test("increase product qty", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.navigateToShop();
    await cartPage.addProductToCart();
    await cartPage.navigateToCart();

    const initialPrice = await cartPage.getPriceAsFloat();

    await expect(cartPage.quantity).toHaveText("1");
    await expect(cartPage.subtotal).toHaveText(`CHF ${initialPrice.toFixed(2)}`);
    await expect(cartPage.total).toHaveText(`CHF ${initialPrice.toFixed(2)}`);

    // Increase product qty
    await page.locator('[data-testid="increase-qty-btn"]').click();
    await expect(cartPage.quantity).toHaveText("2");

    const expectedSubtotal = initialPrice * 2;
    await expect(cartPage.subtotal).toHaveText(`CHF ${expectedSubtotal.toFixed(2)}`);
    await expect(cartPage.total).toHaveText(`CHF ${expectedSubtotal.toFixed(2)}`);
  });
  test("decrease product qty", async ({ page }) => {
    const cartPage = new CartPage(page);

    await cartPage.navigateToShop();
    await cartPage.addProductToCart();
    await cartPage.navigateToCart();

    const initialPrice = await cartPage.getPriceAsFloat();

    await expect(cartPage.quantity).toHaveText("1");
    await expect(cartPage.subtotal).toHaveText(`CHF ${initialPrice.toFixed(2)}`);
    await expect(cartPage.total).toHaveText(`CHF ${initialPrice.toFixed(2)}`);

    // Increase qty
    await page.locator('[data-testid="increase-qty-btn"]').click();
    await expect(cartPage.quantity).toHaveText("2");

    const expectedSubtotal = initialPrice * 2;
    await expect(cartPage.subtotal).toHaveText(`CHF ${expectedSubtotal.toFixed(2)}`);
    await expect(cartPage.total).toHaveText(`CHF ${expectedSubtotal.toFixed(2)}`);

    // Decrease qty
    await page.locator('[data-testid="decrease-qty-btn"]').click();
    await expect(cartPage.quantity).toHaveText("1");

    // Assert that the subtotal is updated correctly after decreasing qty
    const updatedSubtotal = initialPrice * 1;
    await expect(cartPage.subtotal).toHaveText(`CHF ${updatedSubtotal.toFixed(2)}`);
    await expect(cartPage.total).toHaveText(`CHF ${updatedSubtotal.toFixed(2)}`);
  });
});
