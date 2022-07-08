/// <reference types="cypress" />

const { reporters } = require('mocha');
const rimraf = require('rimraf');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************
const cucumber = require('cypress-cucumber-preprocessor').default;
// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('file:preprocessor', cucumber()) // for Cucumber preProcessor
  // To run tests in Chrome incognito mode.
  on("before:browser:launch", (browser, launchOptions) => {
    if (browser.name === "chrome") {
      launchOptions.args.push("--no-sandbox");
      launchOptions.args.push("--disable-gpu");
      launchOptions.args.push("--disable-dev-shm-usage");
      launchOptions.args.push("--incognito");
    }
    return launchOptions;
  });

  // on('before:run', () => {
  //   const pathToDir = "./reports/cucumber-json";
  //   rimraf(pathToDir, function (e) {
  //     if (e)
  //       console.log(e);
  //   });
  // })
  on('after:run', () => {
    


    
    // options.metadata.browser.name= _browser.name
    // options.metadata.browser.name = _browser.name
    // options.metadata.browser.version = _browser.version
    // report.getCucumberReportMaps();
    // report.addScreenshots();
    // report.generateReport(options);
  })
 
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}
