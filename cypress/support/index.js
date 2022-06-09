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
//     dashboard_PO.emailDashboard().trigger('mouseover')
//     dashboard_PO.logoutPopup().contains('Logout').should('be.visible')
//     dashboard_PO.logoutPopup().contains('Logout').click()
//     login_PO.loginHeading().should('be.visible')    
// })


// Alternatively you can use CommonJS syntax:
// require('./commands')
