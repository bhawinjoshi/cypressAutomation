/// <reference types="Cypress" />
class filesPage {

    filesHeader() { return cy.get(".m-0") }
    sharedTab() { return cy.get("button[id='controlled-tab-example-tab-1'] span[class='tab-text']") }
    favoritesTab() { return cy.get("button[id='controlled-tab-example-tab-2'] span[class='tab-text']") }
    shareFile_Button() { return cy.get("button[class='btn btn-success']") }
    rootFolder() { return cy.get("p[class='cursor-pointer m-0 overflow-text-ant']") }
    addNew_Button() {return cy.get(".d-flex > .ant-dropdown-trigger")}
    addNew_Selection() {return cy.get("span[class='ant-dropdown-menu-title-content']")}



}

export default filesPage