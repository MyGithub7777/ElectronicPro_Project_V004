import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";


When('user enter name as {string}', async function (name: string) {
  await this.signuppage.enterUsername(name);
});

When('user enter email id as {string}', async function (email: string) {
  await this.signuppage.enterEmailAddress(email)
});

When('user enter password {string} and confirm password {string}', async function ( pass: string, c_pass: string) {
  await this.signuppage.enterPassword(pass);
  await this.signuppage.enterConfirmPassword(c_pass);
  await this.page.waitForTimeout(2000);
});

When('user clicks on signup button', { timeout: 20000 }, async function () {
  await this.signuppage.clickOnSignupButton();
  await this.page.waitForTimeout(10000);
});


Then('shows error msg as {string}', async function (message: string) {
  let acutal_message = await this.signuppage.getErrorMessage();
  console.log(acutal_message);
  expect(acutal_message).toContain(message);
})