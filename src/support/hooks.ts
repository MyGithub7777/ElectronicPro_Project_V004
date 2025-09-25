import { After, Before, setDefaultTimeout, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, LaunchOptions, Page, webkit } from "@playwright/test";
import { Homepage } from "../pages/homepage";
import { SignInpage } from "../pages/signinpage";
import { SignUppage } from "../pages/signuppage";
import { CustomWorld } from "./customworld";
import path from "path";
import fs from "fs";





setDefaultTimeout(60 * 1000); // 60 seconds instead of 5 sec

Before(async function (this: CustomWorld,) {

    let browserName: string = "chrome";
    let launchoptions: LaunchOptions = { headless: false, args: ["--start-maximized"] }

    //for more browsers/ cross-browsing
    if (browserName === "chromium") {
        this.browser = await chromium.launch({ ...launchoptions });
    }

    else if (browserName === "chrome") {
        this.browser = await chromium.launch({ ...launchoptions, channel: 'chrome' });
    }
    else if (browserName === "msedge") {
        this.browser = await chromium.launch({ ...launchoptions, channel: 'msedge' });
    }

    else if (browserName === "firefox") {
        this.browser = await firefox.launch({ ...launchoptions });
        // executablepath:       //for real browser/system installed browser
    }

    else if (browserName === "webkit") {
        this.browser = await webkit.launch({ ...launchoptions });
        //executablepath:                      //for real browser/system installed browser
    }

    else {
        throw new Error(`x unsupported browse: ${browserName}`);
    }

    //for video, screenshot, and trace in before
    this.context = await this.browser.newContext({
        viewport: null,
        recordVideo: { dir: "reports/test-results/videos/", }
    });
    await this.context.tracing.start({ screenshots: true, snapshots: true });

    this.page = await this.context.newPage();
    //all above page, context, browser for launching browser and to provide fresh instance of browser to every scenario independently.

    //POM class objects
    this.homepage = new Homepage(this.page);
    this.signinpage = new SignInpage(this.page);
    this.signuppage = new SignUppage(this.page);

})


    //await this.page.close();

    // try {
    //     if (this.page) {
    //         await this.page.close();
    //     }
    //     if (this.context) {
    //         await this.context.close();
    //     }
    // } catch (err) {
    //     console.error("Error in After hook:", err);
    // }


After(async function (this: CustomWorld, scenario) {

    if (scenario.result?.status === Status.FAILED) {
        const screenshotPath = path.join(
            "reports/test-results",
            `screenshot-${Date.now()}.png`
        );

        await this.page.screenshot({
            path: screenshotPath,
             fullPage: true
        });

        //screenshot
        const screenshot = fs.readFileSync(screenshotPath);
        this.attach(screenshot, "image/png");
        
        // Attach video (Playwright saves automatically in outputDir)
        const videoPath = await this.page.video()?.path();
        await this.page.close();
        if (videoPath && fs.existsSync(videoPath)) {
            const video = fs.readFileSync(videoPath);
            this.attach(video, "video/webm");
        }

        // Attach trace (saved in outputDir)
        const tracePath = path.join("reports/test-results",
            `trace.zip`);
        await this.context.tracing.stop({ path: tracePath });
        if (fs.existsSync(tracePath)) {
            const trace = fs.readFileSync(tracePath);
            this.attach(trace, "application/zip");
        }
    }
    await this.context.close();
    await this.browser.close();
});

