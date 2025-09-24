import { Given, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/customworld";

Given('user is on the home page', { timeout: 80000 }, async function (this: CustomWorld) {
  await this.page.goto('https://electronicpro.odoo.com/');
  await this.page.waitForTimeout(10000);

  
});


When('user clicks on sign in link', { timeout: 60000 }, async function (this: CustomWorld) {

  await this.homepage.clickonSignInLink();

});
