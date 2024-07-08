import ResultsComponent from "./components/results.component";
import { type Page, Locator, expect } from "@playwright/test";

export default class SearchResultsAssertions {
    constructor(private readonly page: Page, public readonly resultsComponent = new ResultsComponent(page)) {}

    async assertProductsFilteredByPrice(minPrice: number, maxPrice: number): Promise<void> {
        const products: Locator = this.resultsComponent.Elements.productItems();
        const count: number = await products.count();

        for (let i = 0; i < count; i++) {
            const product: Locator = products.nth(i);
            const priceText: string = await this.resultsComponent.Elements.productPrice(product).innerText();
            const price: number = parseFloat(priceText.replace(/[^0-9,.]/g, "").replace(",", "."));
            expect.soft(price).toBeGreaterThanOrEqual(minPrice);
            expect.soft(price).toBeLessThanOrEqual(maxPrice);
        }
    }

    async assertSearchKeyword(keyword: string): Promise<void> {
        await expect.soft(this.resultsComponent.Elements.searchKeyword()).toHaveText(keyword, { ignoreCase: true });
    }
}
