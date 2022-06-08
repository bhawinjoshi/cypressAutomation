import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import filesPage from '../../../pages/filesPage.js';
const files_PO = new filesPage();
const filePath = 'cypress/fixtures/Test Files/Automation_TestClientDemo.pdf'
let newFolderName = "Automation_Test_" + Math.floor((Math.random() * 1000) + 1);

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
    files_PO.successMessage().contains("Uploaded 1 item to ").should('be.visible')
    files_PO.fileUploadedinList().should('contain', 'Automation_TestClientDemo.pdf')
    files_PO.successMessage().contains("Uploaded 1 item to ").should('not.be.visible')


    // cy.get('tbody > tr').find('p.cursor-pointer.m-0.overflow-text-ant')
    //     .each(($el) => {
    //         cy.wrap($el).invoke('text').then(text => {
    //             if (text == "Automation_TestClientDemo.pdf") {
    //                 cy.log(text)
    //                 cy.get("td.ant-table-cell.position-static.ant-table-cell-row-hover a:nth-child(4)").click({ force: true })
    //             }
    //         })
    //     })
})

Then('Enter Folder Name, click on Create button and verify folder is created successfully', () => {

    files_PO.folderName_textbox().type(newFolderName);
    files_PO.upload_Button().click()
    files_PO.successMessage().contains("Created new folder").should('be.visible')
    files_PO.fileUploadedinList().should('contain', newFolderName)
    files_PO.successMessage().contains("Created new folder").should('not.be.visible')
})
