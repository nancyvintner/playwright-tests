import { Locator, type Page } from "@playwright/test";

export default class ResultsComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        productItems: () => this.page.locator('[data-testid="products-results"] .ds-product-tile'),
        productTitle: (product: Locator) => product.locator("h2"),
        productPrice: (product: Locator) => product.locator(".final-price"),
        searchKeyword: () => this.page.locator('[data-testid="products-results"] h1'),
    };

    async clickOnProductTile(index: number): Promise<void> {
        await this.Elements.productItems().nth(index).click();
    }

    async getProductTitle(index: number): Promise<string> {
        const product = this.Elements.productItems().nth(index);
        return await this.Elements.productTitle(product).innerText();
    }
}
