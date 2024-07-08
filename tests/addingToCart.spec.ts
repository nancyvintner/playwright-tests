import { test } from "@playwright/test";
import SearchResultsPage from "../pages/searchResultsPage/searchResults.page";
import ProductDetailsPage from "../pages/productDetailsPage/productDetails.page";
import CartPageAssertions from "../pages/cartPage/cartPage.assertions";

const searchKeyword: string = "legowisko";
let searchResultsPage: SearchResultsPage;
let productDetailsPage: ProductDetailsPage;
let cartPageAssertions: CartPageAssertions;

test.describe("Add product to the cart", () => {
    test.beforeEach(async ({ page }) => {
        searchResultsPage = new SearchResultsPage(page);
        productDetailsPage = new ProductDetailsPage(page);
        cartPageAssertions = new CartPageAssertions(page);
        await searchResultsPage.goTo(searchKeyword);
        await searchResultsPage.acceptCookies();
    });
    test("should add a product to the cart and verify it", async () => {
        const productTitle: string = await searchResultsPage.getProductTitle(0);
        await searchResultsPage.clickOnProductTile(0);
        await productDetailsPage.clickAddToCartButton();
        await productDetailsPage.clickGoToCartButton();
        await cartPageAssertions.assertProductsInCart([productTitle], 1);
    });
});
