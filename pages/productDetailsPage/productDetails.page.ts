import { type Page, } from "@playwright/test";
import ProductDetailsComponent from "./components/productDetails.component";

export default class ProductDetailsPage {
    constructor(private readonly page: Page, public readonly productDetailsComponent = new ProductDetailsComponent(page)) {}

    async clickAddToCartButton(): Promise<void> {
        await this.productDetailsComponent.Elements.addToCartButton().click();
    }    

    async clickGoToCartButton(): Promise<void> {
        await this.productDetailsComponent.Elements.goToCartButton().click();
    }    
}
