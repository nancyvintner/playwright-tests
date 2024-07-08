import { type Page } from "@playwright/test";
import { UserCredentials } from "../../../interfaces/interfaces";

export default class LoginComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        loginButton: () => this.page.locator('[data-selen="login-submit"]'),
        emailInputField: () => this.page.locator('[data-selen="login-email"]'),
        passwordInputField: () => this.page.locator('[data-selen="login-password"]'),
    };

    async clickLoginButton(): Promise<void> {
        await this.Elements.loginButton().click();
    }

    async enterEmail(email: string): Promise<void> {
        await this.Elements.emailInputField().fill(email);
    }

    async enterPassword(password: string): Promise<void> {
        await this.Elements.passwordInputField().fill(password);
    }

    async login(credentials: UserCredentials): Promise<void> {
        await this.enterEmail(credentials.email);
        await this.enterPassword(credentials.password);
        await this.clickLoginButton();
    }
}
