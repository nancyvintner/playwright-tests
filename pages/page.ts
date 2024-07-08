import { type Page, expect } from "@playwright/test";

export default abstract class AbstractPage {
    constructor(protected readonly page: Page) {}

    Elements = {
        consentButton: () => this.page.locator("#cookiebotDialogOkButton"),
    };

    async acceptCookies(): Promise<void> {
        const consentButton = this.Elements.consentButton();
        if (await consentButton.isVisible()) {
            await consentButton.click();
        }
    }

    async assertUrl(URL: string): Promise<void> {
        await expect.soft(this.page).toHaveURL(URL);
    }
}
