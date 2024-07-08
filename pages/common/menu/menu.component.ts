import { type Page } from "@playwright/test";

export default class MenuComponent {
    constructor(protected readonly page: Page) {}

    Elements = {
        searchBox: () => this.page.getByTestId("search-header"),
        searchBoxInputElement: () => this.page.getByTestId("search-input"),
        searchBoxInput: () => this.Elements.searchBoxInputElement().locator("input")
    };

    async clickOnSearchHeader(): Promise<void> {
        await this.Elements.searchBox().click();
    }

    async enterInSearchBox(keyword: string): Promise<void> {
        await this.Elements.searchBoxInput().fill(keyword);
    }
}
