Feature: Verify Move File in ShareFile as Client

    Scenario: Verify Move File in ShareFile as Client

        Given Login into Moneta as 'Client'
        When  Click on 'share-file' from Left Navigation
        Then  Verify Files page is displayed successfully
        And   Click on 'CodalTeam_Clients' Root Folder on Files page
        And   Hover on Add New button and select 'New Folder'
        