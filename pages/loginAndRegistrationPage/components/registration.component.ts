import { type Page } from "@playwright/test";
import { RegistrationData } from "../../../interfaces/interfaces";
import { InputFields, FormFields } from "../../../enums/enums";

export default class RegistrationComponent {
    constructor(private readonly page: Page) {}

    Elements = {
        registerButton: () => this.page.locator('[data-selen="register-select"]'),
        confirmButton: () => this.page.locator('[data-selen="create-account-submit"]'),
        newsletterCheckbox: () => this.page.locator('[data-selen="is-subscribed"]'),
        privacyPolicyCheckbox: () => this.page.locator('[data-selen="register-privacy_policy"]'),
        inputField: (fieldName: InputFields) => this.page.locator(`[data-name="${fieldName}"]`).locator("input"),
        validationField: (fieldName: FormFields) =>
            this.page.locator(`[data-name="${fieldName}"]`).locator('[class*="ErrorMessage"]'),
    };

    async clickRegisterButton(): Promise<void> {
        await this.Elements.registerButton().click();
    }

    async clickConfirmRegistrationButton(): Promise<void> {
        await this.Elements.confirmButton().click();
    }

    async checkNewsletterSubscription(): Promise<void> {
        await this.Elements.newsletterCheckbox().check();
    }

    async checkPrivacyPolicy(): Promise<void> {
        await this.Elements.privacyPolicyCheckbox().check();
    }

    async fillInputField(fieldName: InputFields, value: string): Promise<void> {
        await this.Elements.inputField(fieldName).fill(value);
    }

    async registerNewUser(data: RegistrationData): Promise<void> {
        await this.clickRegisterButton();
        await this.fillInputField(InputFields.EMAIL, data.email);
        await this.fillInputField(InputFields.FIRST_NAME, data.firstName);
        await this.fillInputField(InputFields.LAST_NAME, data.lastName);
        await this.fillInputField(InputFields.PASSWORD, data.password);
        if (data.subscribeNewsletter) {
            await this.checkNewsletterSubscription();
        }
        if (data.acceptPrivacyPolicy) {
            await this.checkPrivacyPolicy();
        }
        await this.clickConfirmRegistrationButton();
    }
}
