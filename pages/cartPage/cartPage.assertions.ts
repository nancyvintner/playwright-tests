import AbstractPage from "../page";
import CartItemsComponent from "./components/cartItems.component";
import { type Page, expect, Locator } from "@playwright/test";

export default class CartPageAssertions extends AbstractPage {
    constructor(protected readonly page: Page, public readonly cartItemsComponent = new CartItemsComponent(page)) {
        super(page);
    }

    async assertPageUrl(): Promise<void> {
        await this.assertUrl("/pl/pl/checkout/cart/");
    }

    async assertNumberOfItems(expectedCount: number): Promise<void> {
        const itemCount = await this.cartItemsComponent.Elements.itemsList().count();
        expect.soft(itemCount).toBe(expectedCount);
    }

    async assertItemsInTheCart(productTitles: string[]): Promise<void> {
        const items: Locator = this.cartItemsComponent.Elements.itemsList();
        const count: number = await items.count();
        const titles: string[] = [];

        for (let i = 0; i < count; i++) {
            const title = await this.cartItemsComponent.Elements.itemTitle(i).innerText();
            titles.push(title);
        }

        productTitles.forEach(productTitle => {
            const found = titles.includes(productTitle);
            expect.soft(found).toBe(true);
        });
    }

    async assertProductsInCart(productTitles: string[], expectedCount: number): Promise<void> {
        await this.page.waitForLoadState('networkidle');
        await this.assertPageUrl();
        await this.assertItemsInTheCart(productTitles);
        await this.assertNumberOfItems(expectedCount);
    }
}
