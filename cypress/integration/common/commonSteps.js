import { Given, When } from 'cypress-cucumber-preprocessor/steps'

Given('Login into Moneta as {string}', (role) => {

    cy.loginAs(role)

})

When('Click on {string} from Left Navigation', (menuItem) => {

    cy.clickonLeftNavigation(menuItem)

})

And('Click on {string} button', (buttonName) => {

    cy.clickButton(buttonName)

})

And('Close the {string} pop-up', (popupHeader) => {

    cy.closePopup(popupHeader)

})