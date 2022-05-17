const os = require('os')
const report = require('multiple-cucumber-html-reporter');

report.generate({
    jsonDir: 'reports/cucumber-json',
    reportPath: './reports/cucumber-htmlreport.html',
    //saveCollectedJSON: true,
    displayDuration: true,
    pageTitle: "Moneta Automation Report",
    reportName: "Moneta Automation Report",
    //displayReportTime: 'true',
    metadata: {
        browser: {
            name: 'chrome',
            version: '100',
            
        },
        device: 'win32',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    
    customData: {
        title: 'Project Specifications',
        data: [
            { label: 'Project', value: 'Moneta' },
            { label: 'Purpose', value: 'Moneta Regression' },
            //{ label: 'Cycle', value: 'B11221.34321' },
            { label: 'Date', value: new Date().toLocaleString() },
            //{ label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST' }
        ]
    }
});