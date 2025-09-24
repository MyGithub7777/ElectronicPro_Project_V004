import { Page } from "@playwright/test";

export class SignUppage{
    private page:Page;
    constructor(page:Page){
        this.page = page;
    }

//locators stored in private variable , so it cannot aaccessible outside class
//and methods are by default public/making public to accessible outside class
//here we using Encapsulation concept, an seperating locator and functions/actions


//locator with private variable
//elementname_textbox/ elementname_link/  elementname_button ...=> naming conventions aal in small letters

private username_textbox = '#name';
private emailaddress_textbox = '#login';
private password_textbox = '#password';
private confirmpassword_textbox = '#confirm_password';
private signup_button = 'button.btn.btn-primary.mb-1';
private errormessageforinvalidpassword_textbox = 'p.alert.alert-danger';
private errormessageforinvalidemail_textbox = 'p.alert.alert-danger';


    async enterUsername(name: string){
        await this.page.locator(this.username_textbox).fill(name);
    }

    async enterEmailAddress(email: string){
        await this.page.locator(this.emailaddress_textbox).fill(email);
    }

    async enterPassword(password: string){
        await this.page.locator(this.password_textbox).fill(password);
    }

    async enterConfirmPassword(c_password: string){
        await this.page.locator(this.confirmpassword_textbox).fill(c_password);
    }

    async clickOnSignupButton(){
        await this.page.locator(this.signup_button).click();
    }

    
    async getErrorMessageForInvalidPassword():Promise<string> {
        let error_message = await this.page.locator(this.errormessageforinvalidpassword_textbox).innerText();
        return error_message;
    }
    async getErrorMessageForInvalidEmail():Promise<string> {
        let error_message = await this.page.locator(this.errormessageforinvalidemail_textbox).innerText();
        return error_message;
    }
    
}