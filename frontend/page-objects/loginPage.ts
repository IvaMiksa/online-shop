import { Page } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToLogin() {
    await this.page.getByText("LOGIN", { exact: true }).click();
  }

}
