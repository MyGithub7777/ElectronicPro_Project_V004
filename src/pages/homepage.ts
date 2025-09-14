import { Page } from "@playwright/test";

export class Homepage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    //locator
    private signin_link = '(//a[text()="Sign in"])[1]';


    // actions
    async clickOnSignInLink() {
        await this.page.locator(this.signin_link).click();
    }

}