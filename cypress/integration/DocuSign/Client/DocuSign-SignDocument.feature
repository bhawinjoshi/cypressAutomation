Feature: Verify Sign Document in DocuSign as Client

    Scenario: Verify Sign Document in DocuSign as Client

        Given Login into Moneta as 'Client'
        When  Click on 'DocuSign' from Left Navigation
        Then  Verify DocuSign page is displayed successfully
        And   Click on three dots button for row number '1'
        And   Click 'Sign' option from menu
        And   Click on CONTINUE button
        And   Click on SIGN icon in the Document
        Then  Adopt Your Signature popup should be displayed
        And   Click on ADOPT AND SIGN button
        And   Signature should be visible on document
        And   Click on Finish button

        #Delete the signature created while Signing Document
        And   Click on 'My Signature' button
        And   Click on Delete icon near signature textbox
        Then  Verify that added signature is deleted successfully
        Then  Close the 'My Signature' pop-up
