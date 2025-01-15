import { test, expect } from "@playwright/test";
import { ShopPage } from "../page-objects/shopPage";
import products from "../test-data/products.json" with { type: "json" };


test.beforeEach(async ({ page }) => {
  // Mock API response
  await page.route("https://dummyjson.com/products", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify(products),
    });
  });

  await page.goto("http://localhost:5173");

  // Navigate to Shop page
  const navigateTo = new ShopPage(page);
  await navigateTo.navigateToShop();
});

test("product fecthing from API", async({page}) => {
  const firstProduct = await page.getByText(products.products[0].title);
  await expect(firstProduct).toBeVisible();
})

test("adding product to cart when user not logged in", async ({ page }) => {
  await page.getByRole("button", { name: "Add to cart" }).first().click();

  const warningMessage = page.getByText(
    "Please register or log in to add products to your cart!"
  );
  await expect(warningMessage).toBeVisible();
});


test("adding product to cart when user logged in", async ({ page }) => {
  await page.getByText('LOGIN').click();
  await page.fill('input[name="email"]', "i@gmail.com");
  await page.fill('input[name="password"]', "Test123!");
  await page.click('button:has-text("Login")');


  await page.locator('button:text-is("Add to cart")').first().click();

  const successMessage = page.getByText(
    "Essence Mascara Lash Princess successfully added to the cart!"
  );
  await expect(successMessage).toBeVisible();
});
