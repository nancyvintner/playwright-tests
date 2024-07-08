import AbstractPage from "../page";
import LoginComponent from "./components/login.component";
import RegistrationComponent from "./components/registration.component";
import HeaderComponent from "../common/header/header.component";
import { type Page } from "@playwright/test";
import { UserCredentials, RegistrationData } from "../../interfaces/interfaces";

export default class LoginPage extends AbstractPage {
    constructor(
        protected readonly page: Page,
        public readonly logInComponent = new LoginComponent(page),
        public readonly registrationComponent = new RegistrationComponent(page),
        public readonly headerComponent = new HeaderComponent(page),
    ) {
        super(page);
    }

    async goTo(): Promise<void> {
        await this.page.goto("/pl/pl/customer/account/login");
        await this.acceptCookies();
    }

    async login(credentials: UserCredentials): Promise<void> {
        await this.logInComponent.login(credentials);
    }

    async registerNewUser(data: RegistrationData): Promise<void> {
        await this.registrationComponent.registerNewUser(data);
    }

    async logOut(): Promise<void> {
        await this.headerComponent.logOut();
    }
}
