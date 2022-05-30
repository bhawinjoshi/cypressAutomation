/// <reference types="Cypress" />
class filesPage {

    filesHeader() { return cy.get(".m-0") }
    sharedTab() { return cy.get("button[id='controlled-tab-example-tab-1'] span[class='tab-text']") }
    favoritesTab() { return cy.get("button[id='controlled-tab-example-tab-2'] span[class='tab-text']") }
    shareFile_Button() { return cy.get("button[class='btn btn-success']") }
    rootFolder() { return cy.get("p[class='cursor-pointer m-0 overflow-text-ant']") }
    addNew_Button() { return cy.get(".d-flex > .ant-dropdown-trigger") }
    addNew_Selection() { return cy.get("span[class='ant-dropdown-menu-title-content']") }
    addNew_Selection_Popup() { return cy.get(".modal-title.h4") }
    browseFiles_link() { return cy.get("input[type='file']") }
    upload_Button() {return cy.get("button[variant='primary']")}
    fileUploaded_Name() {return cy.get("div[class='d-flex align-items-center text-black'] span[class='overflow-text-ant']")}
    fileUpload_SuccessMessage() {return cy.get("div[class='ant-notification-notice-description']")}
    fileUploadedinList() {return cy.get("div[class='d-flex align-items-center'] :nth-child(3) p")}



}

export default filesPage