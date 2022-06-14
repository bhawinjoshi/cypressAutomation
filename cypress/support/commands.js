/// <reference types="Cypress" />
import "cypress-localstorage-commands";
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
//
//
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

// Cypress.Commands.add("LoginClient", () => {

//     //cy.request("POST", "https://dev.moneta.stage-codal.net/api/user/validate_email", { "email": "automationtest@codaldemo.com","device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4" }).

//     cy.request("GET", "https://moneta_dev:T6J4WFVBuoXA@dev.moneta.stage-codal.net/").
//         then(function (response) {

//             expect(response.status).to.eq(200)
//             Cypress.env('device_token', response.body.device_token);
//         })

// })

// Cypress.Commands.add('logInAS3', (Useremail,device_token) => {

//   cy.request({
//       //method: 'POST',
//       url: `${Cypress.env('dev_api_url')}validate_email`,
//       body: {
//           email: "automationtest@codaldemo.com",
//           device_token: "de42d772e3d46e097a1ed23594395f75a00b71a4",

//         }
//       }
//     )
//       .its('body')
//       .then((body) => {
//         window.localStorage.setItem("userDetails", JSON.stringify(body));
//         //window.localStorage.setItem('userDetails', "{\"uuid\":\"93d0fa2a-27bc-3c97-a550-7ddad526d445\",\"first_name\":\"Bhavin\",\"last_name\":\"Joshi\",\"email\":\"bjoshi@codal.com\",\"phone_number\":\"8238666449\",\"international_calling_codes\":\"+91\",\"user_type\":\"clients\",\"user_permission\":{\"can_manage_message_group\":false},\"sendbird_user_id\":\"93d0fa2a-27bc-3c97-a550-7ddad526d445\",\"sendbird_user_token\":\"51e2154ee36f3857b3d63f8547c169542b926635\",\"token\":\"7f9badfe48193387c1aece627c9ed894218bce5f\",\"device_token\":\"de42d772e3d46e097a1ed23594395f75a00b71a4\",\"is_first_login\":false}");
//         window.localStorage.setItem('Email', JSON.stringify(body.email));

//       })
//   });
//localStorage.userDetails(device_token);