/// <reference types="Cypress" />
class docusignPage {

    docusign_Header() { return cy.get("h4[class='m-0']") }
    actionRequired_Tab() { return cy.get("button[id='controlled-tab-example-tab-1'] span[class='tab-text']") }
    completed_Tab() { return cy.get("button[id='controlled-tab-example-tab-2'] span[class='tab-text']") }
    mySignature_Button() { return cy.get(".btn.btn-outline-secondary.d-none.d-md-flex.align-items-center") }
    mySignature_PopupHeader() { return cy.get(".modal-title.h4") }
    createSignature_Button() { return cy.get(".btn.btn-success") }
    firstsignature_Radio() { return cy.get("#fontface1") }
    signature_Textbox() { return (cy.xpath("//div[@class='col-md-8']//div[1]//div//input")) }
    initials_Textbox() { return (cy.xpath("//div[@class='col-md-4']//div[1]//div//input")) }
    deleteSignature_Button() { return cy.get("div[class='mb-16'] em[class='icon-trash-filled']") }
    signatureUpload_link() { return cy.xpath("(//input[@type='file'])[1]") }
    initialsUpload_link() { return cy.xpath("(//input[@type='file'])[2]") }
    signatureUpload_image() { return cy.get("img[class='mh-100 mw-100']") }
    initialsUpload_image() { return cy.get("img[class='mw-100 mh-100']") }






}

export default docusignPage