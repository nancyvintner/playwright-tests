import { type Page } from "@playwright/test";

export default class HeaderComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        accountLoggedInButton: () => this.page.getByTestId("account-info-logged-true"),
        accountLoggedOutButton: () => this.page.getByTestId("account-info-logged-false"),
        logoutButton: () => this.page.getByTestId("logout"),
        cartButton: () => this.page.getByTestId("mini-cart-button"),
        cartBadge: () => this.page.locator('.ds-bagde')
    };

    async logOut(): Promise<void> {
        await this.Elements.accountLoggedInButton().hover();
        await this.Elements.logoutButton().click();
    }
}
