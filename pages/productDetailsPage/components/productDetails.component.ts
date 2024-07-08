import { type Page } from "@playwright/test";

export default class ProductDetailsComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        addToCartButton: () => this.page.getByTestId("add-to-cart-button"),
        goToCartButton: () => this.page.getByTestId('cart-confirmation-go-to-cart')
    };

    async clickAddToCartButton(): Promise<void> {
        await this.Elements.addToCartButton().click();
    }    

    async clickGoToCartButton(): Promise<void> {
        await this.Elements.goToCartButton().click();
    }    
}
