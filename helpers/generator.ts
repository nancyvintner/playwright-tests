import { RegistrationData } from "../interfaces/interfaces";
import { faker } from "@faker-js/faker";

export function generateNewUserData(changedValues?: Partial<RegistrationData>): RegistrationData {
    const userData: RegistrationData = {
        email: faker.internet.email(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        password: faker.internet.password(),
        subscribeNewsletter: false,
        acceptPrivacyPolicy: true,
    };
    return { ...userData, ...changedValues };
}
