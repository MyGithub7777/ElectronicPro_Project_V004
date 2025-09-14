import { Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";

Then('user created account successfully and navigated to {string} title page', async function (expected_result: string) {
  let actual_result = await this.page.title();
  expect(actual_result).toEqual(expected_result);
});