import { Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/customworld";

When('user clicks on dont have an account link', { timeout: 60000 }, async function (this: CustomWorld) {

  await this.signinpage.clickonDontHaveAnAccountLink();

});






