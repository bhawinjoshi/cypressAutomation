import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import filesPage from '../../../pages/filesPage.js';
const files_PO = new filesPage();
const filePath = 'cypress/fixtures/Test Files/Automation_TestClientDemo.pdf'

And('Verify Files page is displayed successfully', () => {
    files_PO.filesHeader().contains('Files').should('be.visible')
    files_PO.sharedTab().should('be.visible')
    files_PO.favoritesTab().should('be.visible')
    cy.url().should('include', 'share-file')
})

And('Click on {string} Root Folder on Files page', (string) => {
    files_PO.rootFolder().contains(string).should('be.visible')
    files_PO.rootFolder().contains(string).click()
})

And('Hover on Add New button and select {string}', (string) => {
    files_PO.addNew_Button().trigger('mouseover')
    files_PO.addNew_Selection().contains(string).click()
})

And('Upload Files pop-up should be displayed with disabled Upload button', () => {
    files_PO.addNew_Selection_Popup().should('be.visible')
    files_PO.upload_Button().should('be.disabled')
})

And('Click on Browse Files link in Upload Files pop-up', () => {
    files_PO.browseFiles_link().click({ force: true })
})

And('Select a File to upload', () => {
    files_PO.browseFiles_link().selectFile(filePath) //selectFile is used for File Upload
    files_PO.fileUploaded_Name().contains('Automation_TestClientDemo.pdf').should('be.visible')
})

And('Upload button should be enabled', () => {
    files_PO.upload_Button().should('be.enabled')
})

And('Click on Upload button from Upload Files pop-up', () => {
    files_PO.upload_Button().click()
})

Then('Success message should be displayed and File should be uploaded successfully', () => {
    //files_PO.fileUploadedinList().contains('Automation_TestClientDemo.pdf').should('be.visible')
    files_PO.fileUpload_SuccessMessage().should('be.visible')
})
