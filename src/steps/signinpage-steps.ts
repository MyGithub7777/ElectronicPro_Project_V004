import { When } from "@cucumber/cucumber";


When('user clicks on create account link', async function () {
  await this.signinpage.clickOnDontHaveAnAccountLink();
});

When("user enters email {string} and password {string}", async function (email: string, password: string) {
  await this.signinpage.enterEmailAddressSignin(email);
  await this.signinpage.enterPasswordSignin(password);
});

When("clicks on login button", async function () {
  await this.signinpage.clickOnSigninButton();
});