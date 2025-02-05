import { Page } from "@playwright/test";

export class WishlistPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToWishlist() {
    await this.page.getByText("WISHLIST", { exact: true }).click();
  }

}