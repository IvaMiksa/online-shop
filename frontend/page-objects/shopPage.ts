import { Page } from "@playwright/test";

export class ShopPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async mockProductApiResponse(products: object) {
    await this.page.route("https://dummyjson.com/products", async (route) => {
      await route.fulfill({
        status: 200,
        contentType: "application/json",
        body: JSON.stringify(products),
      });
    });
  }

  async addProductToCart(productName: string) {
    const productButton = await this.page
      .locator(`text=${productName}`)
      .locator("..")
      .getByRole("button", { name: "Add to cart" });
    await productButton.click();
  }


}
