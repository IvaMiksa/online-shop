import {Page} from "@playwright/test";

export class ShopPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async navigateToShop() {
await this.page.getByText('SHOP').click()

  }
}