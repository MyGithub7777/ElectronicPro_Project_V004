import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../support/customworld";

Then('user should navigated to login {string} title page', async function (this: CustomWorld, expected_result2: string) {
  let actual_result2 = await this.page.title();
  expect(actual_result2).toEqual(expected_result2);

});


Then('user created account successfully and navigated to {string} title page', async function (this: CustomWorld,expected_result: string) {
  let actual_result = await this.page.title();
  expect(actual_result).toEqual(expected_result);
});
//to get title we dont need locator,so we dont write action in pages, we do like above
