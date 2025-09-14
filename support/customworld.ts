import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";
import { Browser, BrowserContext, Page } from "@playwright/test";
import { Homepage } from "../pages/homepage";
import { Signinpage } from "../pages/signinpage";
import { Signuppage } from "../pages/signuppage";

export class CustomWorld extends World {

    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    // POM classes
    homepage!: Homepage;
    signinpage!: Signinpage;
    signuppage!: Signuppage;

    constructor(options: IWorldOptions) {
        super(options);
    }

}

setWorldConstructor(CustomWorld);