import { type Page } from "@playwright/test";

export default class CartItemsComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        itemsList: () => this.page.locator('[data-dynamicyield="cart-products"]'),
        itemTitle: (index: number) => this.page.locator('[data-selen="product-url"]').nth(index),
    };
}
