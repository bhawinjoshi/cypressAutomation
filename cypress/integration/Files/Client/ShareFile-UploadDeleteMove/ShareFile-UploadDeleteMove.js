import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import filesPage from '../../../pages/filesPage.js';
const files_PO = new filesPage();
let newFolderName = "Automation_Test_" + Math.floor((Math.random() * 1000) + 1);
const uploadedFile = "Automation_TestClientDemo.pdf"


And('Click on Browse Files link in Upload Files pop-up', () => {
    files_PO.browseFiles_link().click({ force: true })
})

And('Select a File to upload', () => {
    files_PO.browseFiles_link().attachFile("Automation_TestClientDemo.pdf") //selectFile is used for File Upload
    files_PO.fileUploaded_Name().contains(uploadedFile).should('be.visible')
})

And('Upload button should be enabled', () => {
    files_PO.upload_Button().should('be.enabled')
})

And('Click on Upload button from Upload Files pop-up', () => {
    files_PO.upload_Button().click()
})

Then('Success message should be displayed and File should be uploaded successfully', () => {
    files_PO.successMessage().contains("Uploaded 1 item to ").should('be.visible')
    files_PO.fileUploadedinList().should('contain', uploadedFile)
    files_PO.successMessage().contains("Uploaded 1 item to ").should('not.be.visible')
})

Then('Enter Folder Name, click on Create button and verify folder is created successfully', () => {

    files_PO.folderName_textbox().type(newFolderName);
    files_PO.upload_Button().click()
    files_PO.successMessage().contains("Created new folder").should('be.visible')
    files_PO.fileUploadedinList().should('contain', newFolderName)
    files_PO.successMessage().contains("Created new folder").should('not.be.visible')
})

Then('Hover on uploaded file or folder and click on {string}', (string) => {

    cy.xpath('//p[@class="cursor-pointer m-0 overflow-text-ant" and normalize-space()="' + uploadedFile + '"]').trigger('mouseover').get("td.ant-table-cell.position-static.ant-table-cell-row-hover").find('a').contains(string).click({ force: true })

    //cy.get("td.ant-table-cell.position-static.ant-table-cell-row-hover").find('a').contains(string).click()


    //cy.get("td.ant-table-cell.position-static.ant-table-cell-row-hover").find('a').contains(string).click({ force: true })
    // cy.get('tbody > tr').find('p.cursor-pointer.m-0.overflow-text-ant')
    //     .each(($el) => {
    //         cy.wrap($el).invoke('text').then(text => {
    //             if (text == uploadedFile) {
    //                 cy.log(text)
    //                 //cy.get("td.ant-table-cell.position-static.ant-table-cell-row-hover a:nth-child(4)").click({ force: true })
    //                 cy.get("td.ant-table-cell.position-static.ant-table-cell-row-hover").find('a').contains(string).click({ force: true })
    //             }
    //         })
    //     })
})

Then('Verify File or folder is deleted successfully', () => {
    files_PO.deleteItemMessage().contains("Deleted 1 item").should('be.visible')
    cy.xpath('//p[@class="cursor-pointer m-0 overflow-text-ant" and normalize-space()="' + uploadedFile + '"]').should('not.exist')
    files_PO.deleteItemMessage().contains("Deleted 1 item").should('not.be.visible')
})

Then('Click on right arrow for Shared Folders', () => {
    files_PO.MovePopup_rightArrow_Shared().click()
})

Then('Click on right arrow near {string} under Shared Folders', (foldername) => {
    cy.xpath("//p[normalize-space()='" + foldername + "']//..//..//..//td//span//em[@class='icon icon-chevron-right-outline']").click()
})

Then('Click on radio button for newly created folder', () => {
    cy.xpath("//div[@class='d-flex align-items-center cursor-pointer']//p[@class='cursor-pointer m-0 overflow-text-ant'][normalize-space()='" + newFolderName + "']//..//..//..//td//input[@type='radio']").click()
})

Then('Click on enabled {string} button', (primarybutton) => {
    files_PO.upload_Button().contains(primarybutton).should('be.enabled')
    files_PO.upload_Button().contains(primarybutton).click()
})

Then('Success message should be displayed and File should be moved successfully to selected folder', () => {
    files_PO.successMessage().contains("Moved 1 item to").should('be.visible')
    cy.xpath('//p[@class="cursor-pointer m-0 overflow-text-ant" and normalize-space()="' + uploadedFile + '"]').should('not.exist')
    cy.xpath("//p[normalize-space()='" + newFolderName + "']").click()
    cy.xpath("//p[normalize-space()='" + uploadedFile + "']").should('be.visible')
})