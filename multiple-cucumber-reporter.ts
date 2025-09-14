// import report from "multiple-cucumber-html-reporter";

const reporter = require('multiple-cucumber-html-reporter')

reporter.generate({
    jsonDir: 'reports', // path of JSON files
    reportPath: 'reports/html', // output folder
    displayDuration: true,
    openReportInBrowser: true,
    metadata: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        data: [
            { label: 'Project', value: 'Playwright + Cucumber + Typescript Framework' },
            { label: 'Release Execution', value: '1.0' },
            { label: 'Execution Day Date', value: new Date() },
            { label: 'Execution Start Time', value: new Date().toLocaleTimeString() },
            { label: 'Execution End Time', value: new Date().toLocaleTimeString() }
        ]
    }
});




