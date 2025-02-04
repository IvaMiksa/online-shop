import { Page, Locator } from "@playwright/test";

export class CartPage {
  readonly page: Page;
  readonly quantity: Locator;
  readonly price: Locator;
  readonly subtotal: Locator;
  readonly total: Locator;

  constructor(page: Page) {
    this.page = page;
    this.quantity = this.page.locator('[data-testid="product-cart-qty"]');
    this.price = this.page.locator('[data-testid="product-price"]');
    this.subtotal = this.page.locator('[data-testid="subtotal"]');
    this.total = this.page.locator('[data-testid="total"]');
  }

  async navigateToCart() {
    await this.page.getByText("CART", { exact: true }).click();
  }

  async navigateToShop() {
    await this.page.getByText("SHOP", { exact: true }).click();
  }

  async addProductToCart() {
    await this.page.locator('button:text-is("Add to cart")').first().click();
  }

  async getPriceAsFloat() {
    const priceText = await this.price.textContent();
    const priceWithoutCurrency = priceText?.replace("CHF ", "").trim() || "0";
    return parseFloat(priceWithoutCurrency);
  }
}
