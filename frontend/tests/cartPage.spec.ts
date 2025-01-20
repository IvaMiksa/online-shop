import { test, expect } from "@playwright/test";
import { CartPage } from "../page-objects/cartPage";

test.use({ storageState: "frontend/playwright/.auth/user.json" });
//test.use({ storageState: { cookies: [], origins: [] } });

test.beforeEach("navigate to app", async ({ page, baseURL }) => {
  await page.goto(baseURL);
});

test("check if cart empty after login", async ({ page }) => {
  await page.getByText("CART").click();

  await expect(page.getByText("Total: 0.00 CHF")).toBeVisible();
  await expect(page.getByText("LOGOUT")).toBeVisible();
});

test("product added to cart", async ({ page }) => {
  await page.getByText("SHOP").click();
  await page.locator('button:text-is("Add to cart")').first().click();
  await page.locator(':text-is("CART")').click();

  await expect(
    page.locator('[data-testid="remove-from-cart-btn"]')
  ).toBeVisible();
  await expect(page.locator('[data-testid="increase-qty-btn"]')).toBeVisible();
  await expect(page.locator('[data-testid="decrease-qty-btn"]')).toBeVisible();
});

test("remove product from cart", async ({ page }) => {
  await page.getByText("SHOP").click();
  await page.locator('button:text-is("Add to cart")').first().click();
  await page.locator(':text-is("CART")').click();
  await page.locator('[data-testid="remove-from-cart-btn"]').click();

  await expect(
    page.locator('[data-testid="remove-from-cart-btn"]')
  ).not.toBeVisible();

  await expect(
    page.getByText("successfully removed from the cart")
  ).toBeVisible();
});

test("increase product qty", async ({ page }) => {
  await page.getByText("SHOP").click();
  await page.locator('button:text-is("Add to cart")').first().click();
  await page.locator(':text-is("CART")').click();

  const quantity = page.locator('[data-testid="product-cart-qty"]');
  const price = page.locator('[data-testid="product-price"]');
  const subtotal = page.locator('[data-testid="subtotal"]');
  const total = page.locator('[data-testid="total"]');

  // Assert initial values
  await expect(quantity).toHaveText("1");
  const priceText = await price.textContent();
  const initialPrice = parseFloat(priceText);
  await expect(subtotal).toHaveText(initialPrice.toFixed(2));
  await expect(total).toHaveText(`Total: ${initialPrice.toFixed(2)} CHF`);

  // Increase product qty
  await page.locator('[data-testid="increase-qty-btn"]').click();
  await expect(quantity).toHaveText("2");

  const expectedSubtotal = initialPrice * 2;
  await expect(subtotal).toHaveText(expectedSubtotal.toFixed(2));
  await expect(total).toHaveText(`Total: ${expectedSubtotal.toFixed(2)} CHF`);
});
test("decrease product qty", async ({ page }) => {
  await page.getByText("SHOP").click();
  await page.locator('button:text-is("Add to cart")').first().click();
  await page.locator(':text-is("CART")').click();

  const quantity = page.locator('[data-testid="product-cart-qty"]');
  const price = page.locator('[data-testid="product-price"]');
  const subtotal = page.locator('[data-testid="subtotal"]');
  const total = page.locator('[data-testid="total"]');

  // Assert initial values
  await expect(quantity).toHaveText("1");
  const priceText = await price.textContent();
  const initialPrice = parseFloat(priceText);
  await expect(subtotal).toHaveText(initialPrice.toFixed(2));
  await expect(total).toHaveText(`Total: ${initialPrice.toFixed(2)} CHF`);

  // Increase qty
  await page.locator('[data-testid="increase-qty-btn"]').click();
  await expect(quantity).toHaveText("2");

  const expectedSubtotal = initialPrice * 2;
  await expect(subtotal).toHaveText(expectedSubtotal.toFixed(2));
  await expect(total).toHaveText(`Total: ${expectedSubtotal.toFixed(2)} CHF`);

  // Decrease qty
  await page.locator('[data-testid="decrease-qty-btn"]').click();
  await expect(quantity).toHaveText("1");

  // Assert that the subtotal is updated correctly after decreasing qty
  const updatedSubtotal = initialPrice * 1;
  await expect(subtotal).toHaveText(updatedSubtotal.toFixed(2));
  await expect(total).toHaveText(`Total: ${updatedSubtotal.toFixed(2)} CHF`);
});
