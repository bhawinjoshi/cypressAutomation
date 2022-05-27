Feature: Verify Upload File in ShareFile as Client

    Scenario: Verify Upload File in ShareFile as Client

        Given Login into Moneta as 'Client'
        When  Click on 'share-file' from Left Navigation
        And   Verify Files page is displayed successfully
        And   Click on 'CodalTeam_Clients' Root Folder on Files page
        And   Hover on Add New button and select 'File Upload'