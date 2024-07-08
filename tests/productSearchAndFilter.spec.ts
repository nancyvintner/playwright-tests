import { test } from "@playwright/test";
import SearchResultsPage from "../pages/searchResultsPage/searchResults.page";
import SearchResultsAssertions from "../pages/searchResultsPage/searchResults.assertions";
import { Price } from "../enums/enums"

const searchKeyword: string = "legowisko";

test.describe("Product search and filter", () => {
    let searchResultsPage: SearchResultsPage;
    let searchResultsAssertions: SearchResultsAssertions;
    test.beforeEach(async ({ page }) => {
        searchResultsPage = new SearchResultsPage(page);
        searchResultsAssertions = new SearchResultsAssertions(page);
        await page.goto("/pl/pl");
        await searchResultsPage.acceptCookies();
    });
    test(`should find and filter products related to ${searchKeyword}`, async () => {
        await searchResultsPage.clickOnSearchHeader();
        await searchResultsPage.enterInSearchBox(searchKeyword);
        await searchResultsPage.applyFilters({
            price: Price.UP_TO_75,
        });
        await searchResultsAssertions.assertProductsFilteredByPrice(0, 75);
        await searchResultsAssertions.assertSearchKeyword(searchKeyword);
    });
});
