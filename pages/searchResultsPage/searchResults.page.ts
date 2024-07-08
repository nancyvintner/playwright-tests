import { type Page } from "@playwright/test";
import AbstractPage from "../page";
import FiltersComponent from "./components/filters.component";
import ResultsComponent from "./components/results.component";
import MenuComponent from "../common/menu/menu.component";
import { FilterOptions } from "../../interfaces/interfaces";

export default class SearchResultsPage extends AbstractPage {
    constructor(
        protected readonly page: Page,
        public readonly filtersComponent = new FiltersComponent(page),
        public readonly resultsComponent = new ResultsComponent(page),
        public readonly menuComponent = new MenuComponent(page)
    ) {
        super(page);
    }

    async goTo(searchKeyword: string): Promise<void> {
        await this.page.goto(`/pl/pl/?query=${searchKeyword}`);
    }

    async clickOnSearchHeader(): Promise<void> {
        await this.menuComponent.clickOnSearchHeader();
    }

    async enterInSearchBox(keyword: string): Promise<void> {
        await this.menuComponent.enterInSearchBox(keyword);
    }

    async getProductTitle(index: number): Promise<string> {
        return await this.resultsComponent.getProductTitle(index);
    }

    async applyFilters(filters: FilterOptions): Promise<void> {
        if (filters.color) {
            await this.filtersComponent.selectColorFilter(filters.color);
        }
        if (filters.price) {
            await this.filtersComponent.selectPriceFilter(filters.price);
        }
        if (filters.size) {
            await this.filtersComponent.selectSizeFilter(filters.size);
        }
    }

    async clickOnProductTile(index: number): Promise<void> {
        await this.resultsComponent.clickOnProductTile(index);
    }
}
