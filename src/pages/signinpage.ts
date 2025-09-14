import { Page } from "@playwright/test";

export class Signinpage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //locator
    private dont_have_an_account_link = 'a.btn.btn-link.btn-sm.mt-2';
    private email_address_textbox = '#login';
    private password_textbox = '#password';
    private signin_button = '//button[text()="Log in"]';


    //actions
    async clickOnDontHaveAnAccountLink() {
        await this.page.locator(this.dont_have_an_account_link).click();
    }

    async enterEmailAddressSignin(email: string) {
        await this.page.locator(this.email_address_textbox).fill(email);
    }

    async enterPasswordSignin(password: string) {
        await this.page.locator(this.password_textbox).fill(password);
    }

     async clickOnSigninButton() {
        await this.page.locator(this.signin_button).click();
    }

}