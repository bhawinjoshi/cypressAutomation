import { And } from 'cypress-cucumber-preprocessor/steps'
import docusignPage from '../pages/docusignPage.js';
const docusign_PO = new docusignPage();
let username_label = 'automation test'
const signaturefilePath = 'cypress/fixtures/Test Files/signature-sample.png'
const initialsfilePath = 'cypress/fixtures/Test Files/initials-sample.jpg'

And('Verify DocuSign page is displayed successfully', () => {
    docusign_PO.docusign_Header().contains('DocuSign').should('be.visible')
    docusign_PO.actionRequired_Tab().should('be.visible')
    docusign_PO.completed_Tab().should('be.visible')
    cy.url().should('include', 'docu-sign')
})

And('My Signature Popup should be displayed with Create Signature button', () => {
    docusign_PO.mySignature_PopupHeader().contains('My Signature').should('be.visible')
    docusign_PO.createSignature_Button().contains('Create Your Signature and Initials').should('be.visible')
})

And('Click on {string} tab from My Signature pop-up', (tabName) => {
    cy.xpath("//div[@class='sign-tab-group']//button[normalize-space()='" + tabName + "']").should('be.visible')
    cy.xpath("//div[@class='sign-tab-group']//button[normalize-space()='" + tabName + "']").click()
})

And('Select first signature from list of available signatures', () => {
    docusign_PO.firstsignature_Radio().should('be.visible')
    docusign_PO.firstsignature_Radio().click()
})

And('Verify that added signature is present with Signature and Initials', () => {
    docusign_PO.signature_Textbox().should('have.attr', 'value', username_label)
    docusign_PO.initials_Textbox().should('have.attr', 'value', 'AT')
})

And('Click on Delete icon near signature textbox', () => {
    docusign_PO.deleteSignature_Button().should('be.visible')
    docusign_PO.deleteSignature_Button().click()
})

And('Verify that added signature is delete successfully', () => {
    docusign_PO.signature_Textbox().should('not.exist')
    docusign_PO.initials_Textbox().should('not.exist')
})

And('Select Signature and Initials file to upload and verify they are upload successfully', () => {
    docusign_PO.signatureUpload_link().selectFile(signaturefilePath)
    docusign_PO.initialsUpload_link().selectFile(initialsfilePath)
    docusign_PO.signatureUpload_image().scrollIntoView()
    docusign_PO.signatureUpload_image().should('be.visible')
    docusign_PO.initialsUpload_image().scrollIntoView()
    docusign_PO.initialsUpload_image().should('be.visible')
})