// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import loginPage from '../integration/pages/loginPage.js'
const login_PO = new loginPage();
import dashboardPage from '../integration/pages/dashboardPage.js'
const dashboard_PO = new dashboardPage();

import './commands'
import '../integration/pages/loginPage.js'
require('cypress-xpath')

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})



// after(() => {
//   cy.clickonLeftNavigation("Home")
//   dashboard_PO.downarrow().click()
//   dashboard_PO.logoutLink().should('be.visible')
//   dashboard_PO.logoutLink().click()
//   login_PO.loginHeading().should('be.visible')
// })

afterEach(() => {
  const screenshotsFolder = Cypress.config("screenshotsFolder");
  if (window.cucumberJson?.generate) {
    const testState = window.testState;
    const stepResult =
      testState.runTests[testState.currentScenario.name][testState.currentStep];
    if (stepResult?.status === "failed") {
      const scenarioName = testState.currentScenario.name.endsWith('.') ?
        testState.currentScenario.name.substring(0, testState.currentScenario.name.length - 1) :
        testState.currentScenario.name;

      const screenshotFileName = `${testState.feature.name} -- ${scenarioName} (failed).png`;
      
      cy.readFile(
        `${screenshotsFolder}/${Cypress.spec.name}/${screenshotFileName}`,
        "base64"
      ).then((imgData) => {
        if(imgData) {
          stepResult.attachment = {
            data: imgData,
            media: { type: "image/png" },
            index: testState.currentStep,
            testCase: testState.formatTestCase(testState.currentScenario),
          };
        }
      });
    }
  }
});


// Alternatively you can use CommonJS syntax:
// require('./commands')
