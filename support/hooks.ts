import { After, Before, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext, chromium, firefox, LaunchOptions, Page, webkit } from "@playwright/test";
import fs from "fs";
import path from "path";
import { Homepage } from "../pages/homepage";
import { Signinpage } from "../pages/signinpage";
import { Signuppage } from "../pages/signuppage";
import { CustomWorld } from "./customworld";


Before({ timeout: 20000 }, async function (this: CustomWorld) {

  let browserName: string = "chrome";
  let launchoptions: LaunchOptions = { headless: false, args: ["--start-maximized"] }

  if (browserName == "chromium") {
    this.browser = await chromium.launch({ ...launchoptions });
  }
  else if (browserName == "chrome") {
    this.browser = await chromium.launch({ ...launchoptions, channel: 'chrome' });
  }
  else if (browserName == "firefox") {
    this.browser = await firefox.launch({ ...launchoptions });
  }
  else if (browserName == "msedge") {
    this.browser = await chromium.launch({ ...launchoptions, channel: 'msedge' });
  }
  else if (browserName == "webkit") {
    this.browser = await webkit.launch({ ...launchoptions })
  }
  else {
    throw new Error(`❌ Unsupported browser: ${browserName}`);
  }


  this.context = await this.browser.newContext({
    viewport: null,
    recordVideo: { dir: "reports/test-results/videos/", }
  });
  await this.context.tracing.start({ screenshots: true, snapshots: true })

  this.page = await this.context.newPage();

  this.homepage = new Homepage(this.page);
  this.signinpage = new Signinpage(this.page);
  this.signuppage = new Signuppage(this.page);
});


After(async function (this: CustomWorld, scenario) {

  if (scenario.result?.status === Status.FAILED) {
    //screenshot 
      const screenshotPath = path.join(
        "reports/test-results",
        `screenshot-${Date.now()}.png`
      );
      await this.page.screenshot({ path: screenshotPath, fullPage: true });
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
    const tracePath = path.join("reports/test-results", `trace.zip`);
    await this.context.tracing.stop({ path: tracePath });
    if (fs.existsSync(tracePath)) {
      const trace = fs.readFileSync(tracePath);
      this.attach(trace, "application/zip");
    }
  }

  await this.context.close();
  await this.browser.close();
});
