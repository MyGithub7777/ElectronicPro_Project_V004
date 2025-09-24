import { setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { Homepage } from "../pages/homepage";
import { SignInpage } from "../pages/signinpage";
import { SignUppage } from "../pages/signuppage";

export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    //POM classes
    homepage!: Homepage;
    signinpage!: SignInpage;
    signuppage!: SignUppage;

}
setWorldConstructor(CustomWorld);