import { And, Given } from 'cypress-cucumber-preprocessor/steps'
import filesPage from '../../../pages/filesPage.js';
const files_PO = new filesPage();


And('Verify Files page is displayed successfully', () => {
    files_PO.filesHeader().should('be.visible')
    files_PO.sharedTab().should('be.visible')
    files_PO.favoritesTab().should('be.visible')
    files_PO.shareFile_Button().should('be.visible')
})

