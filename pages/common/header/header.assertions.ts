import { type Page, expect } from "@playwright/test";
import HeaderComponent from "./header.component";

export default class HeaderComponentAssertions {
    constructor(private readonly page: Page, public readonly headerComponent = new HeaderComponent(page)) {}

    async assertUserNameOnHeader(firstName: string): Promise<void> {
        await expect(this.headerComponent.Elements.accountLoggedInButton()).toBeVisible();
        await expect(this.headerComponent.Elements.accountLoggedInButton()).toContainText(firstName);
    }

    async assertUserLoggedOut(): Promise<void> {
        await expect(this.headerComponent.Elements.accountLoggedOutButton()).toBeVisible();
    }
}
