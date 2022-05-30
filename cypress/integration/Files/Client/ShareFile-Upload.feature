Feature: Verify Upload File in ShareFile as Client

    Scenario: Verify Upload File in ShareFile as Client

        Given Login into Moneta as 'Client'
        When  Click on 'share-file' from Left Navigation
        Then  Verify Files page is displayed successfully
        And   Click on 'CodalTeam_Clients' Root Folder on Files page
        And   Hover on Add New button and select 'File Upload'
        Then  Upload Files pop-up should be displayed with disabled Upload button
        And   Click on Browse Files link in Upload Files pop-up
        And   Select a File to upload 
        And   Upload button should be enabled
        And   Click on Upload button from Upload Files pop-up
        Then  Success message should be displayed and File should be uploaded successfully