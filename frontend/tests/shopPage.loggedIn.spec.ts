import { test, expect } from "@playwright/test";
import { ShopPage } from "../page-objects/shopPage";
import products from "../test-data/products.json" with { type: "json" };

test.use({ storageState: "frontend/playwright/.auth/user.json" });

test.beforeEach(async ({ page, baseURL }) => {
  const shopPage = new ShopPage(page);

  await shopPage.mockProductApiResponse(products);

  await page.goto(baseURL);

  await page.getByText('SHOP').click()
});


test("adding product to cart when user logged in", async ({ page }) => {
  const shopPage = new ShopPage(page);
  await shopPage.addProductToCart(products.products[0].title);

  const successMessage = page.getByText(
    `${products.products[0].title} successfully added to the cart!`
  );
  await expect(successMessage).toBeVisible();
});
