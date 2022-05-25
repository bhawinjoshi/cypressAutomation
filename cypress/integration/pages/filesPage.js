/// <reference types="Cypress" />
class filesPage {

    filesHeader() { return cy.get(".m-0") }
    sharedTab() { return cy.get("button[id='controlled-tab-example-tab-1'] span[class='tab-text']") }
    favoritesTab() { return cy.get("button[id='controlled-tab-example-tab-2'] span[class='tab-text']") }
    shareFile_Button() { return cy.get("button[class='btn btn-success']") }
    
}

export default filesPage