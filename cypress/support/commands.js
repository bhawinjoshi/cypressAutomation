/// <reference types="Cypress" />
import "cypress-localstorage-commands";
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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add("LoginClient", () => {

    cy.request("POST", "https://dev.moneta.stage-codal.net/api/user/login", { "email": "automationtest@codaldemo.com", "password": "Moneta@123", "device_token": "de42d772e3d46e097a1ed23594395f75a00b71a4" }).
        then(function (response) {

            expect(response.status).to.eq(200)
            Cypress.env('device_token', response.body.device_token);
        })

})

// Cypress.Commands.add('login', () => { 
//     cy.request({
//       method: 'POST',
//       url: 'https://dev.moneta.stage-codal.net/api/user/login',
//       body: {
//         user: {
//           email: 'automationtest@codaldemo.com',
//           password: 'Moneta@123',
//           device_token: 'de42d772e3d46e097a1ed23594395f75a00b71a4',
//         }
//       }
//     })
//     .its('body')
//     .then(body => {
//         cy.setLocalStorage("email", body.user.email);
//         cy.setLocalStorage("password", body.user.password);
//       cy.setLocalStorage("device_token", body.user.device_token);
//     })
//   });