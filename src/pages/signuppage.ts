import { Page } from "@playwright/test";

export class Signuppage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //locators
    private username_textbox = '#name';
    private email_textbox = '#login' ;
    private password_textbox= '#password';
    private confirm_password_textbox = '#confirm_password';
    private signup_button = '//button[text()=" Sign up"]' ;
    private message_text = 'p.alert.alert-danger';

    
    //actions 
    async enterUsername(name: string) {
        await this.page.locator(this.username_textbox).fill(name);
    }

    async enterEmailAddress(email: string) {
        await this.page.locator(this.email_textbox).fill(email);
    }

    async enterPassword(password: string) {
        await this.page.locator(this.password_textbox).fill(password);
    }

    async enterConfirmPassword(c_password: string) {
        await this.page.locator(this.confirm_password_textbox).fill(c_password);
    }

    async clickOnSignupButton() {
        await this.page.locator(this.signup_button).click();
    }

    async getErrorMessage(): Promise<string> {
        let error_message = await this.page.locator(this.message_text).innerText();
        return error_message;
    }
}