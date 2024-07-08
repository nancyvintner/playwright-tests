import { Page, Locator, expect } from "@playwright/test";
import HeaderComponentAssertions from "../common/header/header.assertions";
import RegistrationComponent from "./components/registration.component";
import { FormFields, WarningMessages } from "../../enums/enums";

export default class LoginPageAssertions {
    constructor(
        private readonly page: Page,
        public readonly headerComponentAssertions = new HeaderComponentAssertions(page),
        public readonly registrationComponent = new RegistrationComponent(page),
    ) {}

    async assertRegistrationSuccess(firstName: string): Promise<void> {
        await expect(this.page).toHaveURL(/.*customer\/account\/edit/);
        await this.headerComponentAssertions.assertUserNameOnHeader(firstName);
    }

    async assertLoginSuccess(firstName: string): Promise<void> {
        await expect(this.page).toHaveURL(/.*\/pl\/pl\/$/);
        await this.headerComponentAssertions.assertUserNameOnHeader(firstName);
    }

    async assertValidationMessage(fieldName: FormFields, message: WarningMessages): Promise<void> {
        const validationField: Locator = this.registrationComponent.Elements.validationField(fieldName);
        await expect(validationField).toBeVisible();
        await expect(validationField).toHaveText(message);
    }

    async assertUserLoggedOut(): Promise<void> {
        await this.headerComponentAssertions.assertUserLoggedOut()
    }
}
