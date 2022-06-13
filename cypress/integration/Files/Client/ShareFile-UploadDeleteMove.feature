Feature: Verify Upload, Delete and Move File into Folder in ShareFile as Client

    Scenario: Verify Upload, Delete and Move File into Folder in ShareFile as Client

        Given Login into Moneta as 'Client'
        When  Click on 'share-file' from Left Navigation
        Then  Verify Files page is displayed successfully
        And   Click on 'CodalTeam_Clients' Root Folder on Files page

        #Create New Folder
        And   Hover on Add New button and select 'New Folder'
        Then  'New Folder' pop-up should be displayed with disabled 'Create' button
        And   Enter Folder Name, click on Create button and verify folder is created successfully

        #File Upload
        And   Hover on Add New button and select 'File Upload'
        Then  'Upload Files' pop-up should be displayed with disabled 'Upload' button
        And   Click on Browse Files link in Upload Files pop-up
        And   Select a File to upload
        And   Upload button should be enabled
        And   Click on Upload button from Upload Files pop-up
        Then  Success message should be displayed and File should be uploaded successfully

        #Delete Uploaded File
        And  Hover on uploaded file or folder and click on 'Delete'
        Then Verify File or folder is deleted successfully

        #Upload File again to move
        And   Hover on Add New button and select 'File Upload'
        Then  'Upload Files' pop-up should be displayed with disabled 'Upload' button
        And   Click on Browse Files link in Upload Files pop-up
        And   Select a File to upload
        And   Upload button should be enabled
        And   Click on Upload button from Upload Files pop-up
        Then  Success message should be displayed and File should be uploaded successfully
        And   Hover on uploaded file or folder and click on 'Move'
        And   'Move 1 item to...' pop-up should be displayed with disabled 'Move' button
        And    Click on right arrow for Shared Folders
        And    Click on right arrow near 'CodalTeam_Clients' under Shared Folders
        And    Click on radio button for newly created folder
        And    Click on enabled 'Move' button
        Then  Success message should be displayed and File should be moved successfully to selected folder