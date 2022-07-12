import { Given, When } from 'cypress-cucumber-preprocessor/steps'
import filesPage from '../pages/filesPage.js';
const files_PO = new filesPage();

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

And('{string} pop-up should be displayed with disabled {string} button', (popupheader, primarybutton) => {
    
    files_PO.addNew_Selection_Popup().contains(popupheader).should('be.visible')
    files_PO.upload_Button().contains(primarybutton).should('be.disabled')
})