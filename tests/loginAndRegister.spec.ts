import { test } from "../fixtures/loginFixtures";
import { UserCredentials, RegistrationData } from "../interfaces/interfaces";
import { FormFields, WarningMessages } from "../enums/enums";

let registrationData: RegistrationData;
let userCredentials: UserCredentials;

test.describe("User Registration and Login - happy path", () => {
    test.beforeEach(async ({ registrationData: regData, userCredentials: usrCred, loginPage }) => {
        registrationData = regData;
        userCredentials = usrCred;
        await loginPage.goTo();
    });

    test("should register a new user successfully and log in with the newly created credentials", async ({
        loginPage, loginPageAssertion,
    }) => {
        await loginPage.registerNewUser(registrationData);
        await loginPageAssertion.assertRegistrationSuccess(registrationData.firstName);
        await loginPage.logOut();
        await loginPageAssertion.assertUserLoggedOut()
        await loginPage.goTo();
        await loginPage.login(userCredentials);
        await loginPageAssertion.assertLoginSuccess(registrationData.firstName);
    });
});

test.describe("Negative Registration Tests", () => {
    test.beforeEach(async ({ loginPage }) => {
        await loginPage.goTo();
    });

    test("should fail to register a new user with invalid email format", async ({ loginPage, registrationData, loginPageAssertion }) => {
        const invalidRegistrationData = { ...registrationData, email: "invalid@email" };
        await loginPage.registerNewUser(invalidRegistrationData);
        await loginPageAssertion.assertValidationMessage(FormFields.EMAIL, WarningMessages.EMAIL_WARNING);
    });
});
