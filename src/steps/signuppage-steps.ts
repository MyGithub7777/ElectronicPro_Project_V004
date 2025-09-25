import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/customworld";

Then('user should navigated to {string} title page', async function (this: CustomWorld,expected_result1: string) {
  let actual_result1 = await this.page.title();
  expect(actual_result1).toEqual(expected_result1);

});

When('user enters name {string} and email {string}', { timeout: 60000 }, async function (this: CustomWorld,name: string, email: string) {

  await this.signuppage.enterUsername(name);
  await this.signuppage.enterEmailAddress(email);
});

When('user enters password {string} and confirm password {string}', { timeout: 60000 }, async function (this: CustomWorld,pass: string, c_pass: string) {

  await this.signuppage.enterPassword(pass);
  await this.signuppage.enterConfirmPassword(c_pass);
});


When('user enters email {string} and password {string}', { timeout: 60000 }, async function (this: CustomWorld,email: string, password: string) {

  await this.signuppage.enterEmailAddress(email);
  await this.signuppage.enterPassword(password);
});




When('user clicks on sign up button', { timeout: 60000 }, async function (this: CustomWorld) {

  await this.signuppage.clickOnSignupButton();

});


Then('error msg should be display as {string}', async function (this: CustomWorld,expected_message: string) {

  let actual_message = await this.signuppage.getErrorMessageForInvalidPassword();
  expect(actual_message).toEqual(expected_message);
});
//here we want text, we get it by innerText() method which is written in signuppage, and here we call that function 
//and compare it with expected result by using assertion


Then('error msg should be display {string}', async function (this: CustomWorld,expected_message: string) {

  let actual_message = await this.signuppage.getErrorMessageForInvalidEmail();
  console.log(actual_message);
  expect(actual_message).toContain(expected_message);
});
