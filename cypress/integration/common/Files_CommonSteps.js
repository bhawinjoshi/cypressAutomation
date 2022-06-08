import { And } from 'cypress-cucumber-preprocessor/steps'
import filesPage from '../../integration/pages/filesPage.js';
const files_PO = new filesPage();


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

And('{string} pop-up should be displayed with disabled {string} button', (popupheader, primarybutton ) => {
    files_PO.addNew_Selection_Popup().contains(popupheader).should('be.visible')
    files_PO.upload_Button().contains(primarybutton).should('be.disabled')
})