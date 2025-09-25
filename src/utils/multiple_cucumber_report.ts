//import reporter from "multiple-cucumber-html-reporter";

const reporter = require("multiple-cucumber-html-reporter")
reporter.generate({
  jsonDir: "reports",              // Path to JSON output from Cucumber
  reportPath: "reports/html",      // Destination for the HTML report
  metadata: {
    browser: {
      name: "chrome",
      version: "100",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
      version: "11",
    },
  },
  customData: {
    title: "Run Info",
    data: [
      { label: "Project", value: "Playwright + Cucumber + TS" },
      { label: "Release", value: "1.0.0" },
      { label: "Cycle", value: "B11221.34321" },
      { label: "Execution Start Time", value: new Date().toLocaleString() },
    ],
  },
});
