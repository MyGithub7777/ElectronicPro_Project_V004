import { expect, Page } from "@playwright/test";

export class SignInpage{

    private page: Page;

    constructor(page: Page){
        this.page = page;
    }



    //locator with varaible

    private donthaveanaccount_link = 'a.btn.btn-link.btn-sm.mt-2';
    

//actions/methods
    async clickonDontHaveAnAccountLink(){
        await this.page.locator(this.donthaveanaccount_link).click();
   }

}
