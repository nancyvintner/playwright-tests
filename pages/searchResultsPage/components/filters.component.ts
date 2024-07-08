import { type Page } from "@playwright/test";
import { Color, Price, Size } from "../../../enums/enums";

export default class FiltersComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        priceFilter: (filter: Price) =>
            this.page.getByTestId("prices-filters-box").locator(`button:has-text("${filter}")`),
        colorFilter: (filter: Color) =>
            this.page.getByTestId("colors-filters-box").locator(`button:has-text("${filter}")`),
        sizeFilter: (filter: Size) =>
            this.page.getByTestId("sizes-filters-box").locator(`button:has-text("${filter}")`),
    };

    async selectColorFilter(filter: Color): Promise<void> {
        await this.Elements.colorFilter(filter).click();
    }

    async selectPriceFilter(filter: Price): Promise<void> {
        await this.Elements.priceFilter(filter).click();
    }

    async selectSizeFilter(filter: Size): Promise<void> {
        await this.Elements.sizeFilter(filter).click();
    }
}
