import { Given, When } from "@cucumber/cucumber";


Given('user is on home page', { timeout: 20000 }, async function () {

  await this.page.goto('https://electronicpro.odoo.com/');
  await this.page.waitForTimeout(2000);
  

});

When('user clicks on signin link', async function () {
  await this.homepage.clickOnSignInLink();
  await this.page.waitForTimeout(2000);

});