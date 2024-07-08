import { test as base, expect } from "@playwright/test";
import LoginPage from "../pages/loginAndRegistrationPage/loginAndRegistration.page";
import LoginPageAssertions from "../pages/loginAndRegistrationPage/loginAndRegistrationPage.assertions";
import { generateNewUserData } from "../helpers/generator";
import { RegistrationData, UserCredentials } from "../interfaces/interfaces";

type LoginFixtures = {
    loginPage: LoginPage;
    loginPageAssertion: LoginPageAssertions;
    registrationData: RegistrationData;
    userCredentials: UserCredentials;
};

export const test = base.extend<LoginFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
    loginPageAssertion: async ({page}, use) => {
        const loginPageAssertion = new LoginPageAssertions(page);
        await use(loginPageAssertion);
    },
    registrationData: async ({}, use) => {
        const userData = generateNewUserData();
        await use(userData);
    },
    userCredentials: async ({ registrationData }, use) => {
        const userCredentials: UserCredentials = {
            email: registrationData.email,
            password: registrationData.password,
        };
        await use(userCredentials);
    },
});

export { expect };
