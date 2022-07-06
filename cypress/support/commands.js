/// <reference types="Cypress" />
import 'cypress-iframe'
import "cypress-localstorage-commands";
import 'cypress-file-upload';
import loginPage from '../integration/pages/loginPage.js'
const login_PO = new loginPage();
import dashboardPage from '../integration/pages/dashboardPage.js'
const dashboard_PO = new dashboardPage();
const userDetailsClient = { "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4", "is_first_login": false }
const userDetailsAdvisor = { "device_token": "d7e3305f890a99caebe12c8cbb5b1ecabf21581d", "is_first_login": false }

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

let data;

//Load All the data from loginData.json file from fixture folder
before(() => {
  cy.fixture('loginData').then((tData) => {
    data = tData;
  });
});

Cypress.Commands.add('loginAs', (role) => {
  if (role == "Client") {
    cy.visit("/", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('userDetails', JSON.stringify(userDetailsClient));
      }
    })
    login_PO.emailAddress_textbox().type(data.userNameClient)
    login_PO.next_button().click()
    login_PO.password_textbox().type(data.passwordClient)
  }
  else if (role == "Advisor") {
    cy.visit("/", {
      onBeforeLoad: function (window) {
        window.localStorage.setItem('userDetails', JSON.stringify(userDetailsAdvisor));
      }
    })
    login_PO.emailAddress_textbox().type(data.userNameAdvisor)
    login_PO.next_button().click()
    login_PO.password_textbox().type(data.passwordAdvisor)
  }
  login_PO.loginButton().click()
  dashboard_PO.homeLabel().should('be.visible')
  dashboard_PO.bannerImage().should('be.visible')
  cy.url().should('include', 'dashboard')
})

Cypress.Commands.add('clickonLeftNavigation', (menuItem) => {

  cy.xpath("//a[normalize-space()='" + menuItem + "']", { timeout: 10000 }).should('be.visible')
  cy.xpath("//a[normalize-space()='" + menuItem + "']").click()

})

Cypress.Commands.add('clickButton', (buttonName) => {
  cy.xpath("//button[normalize-space()='" + buttonName + "']").click()
})

Cypress.Commands.add('closePopup', (popupHeader) => {
  cy.xpath("//div[normalize-space()='" + popupHeader + "']//button[@class='btn-close']").click()
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })