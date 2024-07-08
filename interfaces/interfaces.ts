import { Color, Price, Size } from "../enums/enums";
export interface UserCredentials {
    email: string;
    password: string;
}

export interface RegistrationData {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    subscribeNewsletter: boolean;
    acceptPrivacyPolicy: boolean;
}

export interface FilterOptions {
    color?: Color;
    price?: Price;
    size?: Size;
}
