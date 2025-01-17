import {Page} from "@playwright/test";

export class CartPage {

  readonly page: Page

  constructor(page: Page) {
    this.page = page
  }

  async navigateToCart() {
  await this.page.getByText('CART').click()

  }
}