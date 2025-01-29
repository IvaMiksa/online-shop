import { test, expect } from "@playwright/test";
import { ShopPage } from "../page-objects/shopPage";
import products from "../test-data/products.json" with { type: "json" };

test.use({ storageState: "../playwright/.auth/user.json" });

test.beforeEach(async ({ page, baseURL }) => {
  const shopPage = new ShopPage(page);

  await shopPage.mockProductApiResponse(products);

  await page.goto(baseURL);

  await page.getByText('SHOP', {exact:true}).click()
});

test("product fetching from API", async ({ page }) => {

  for (const product of products.products) {
    const productName = page.getByText(product.title);
    await expect(productName).toBeVisible(); 
    }

  const productsCount = await page.locator('[data-testid="product-card"]').count();
  expect(productsCount).toBe(products.products.length);
});

test("displaying a message when no products are available", async ({ page }) => {
  const shopPage = new ShopPage(page);

  await shopPage.mockProductApiResponse({ products: [] });

  await page.reload();

  const emptyMessage = page.getByText("No products available");
  await expect(emptyMessage).toBeVisible();
});

test("adding product to cart when user logged in", async ({ page }) => {
  const shopPage = new ShopPage(page);
  await shopPage.addProductToCart(products.products[0].title);

  const successMessage = page.getByText(
    `${products.products[0].title} successfully added to the cart!`
  );
  await expect(successMessage).toBeVisible();
});
