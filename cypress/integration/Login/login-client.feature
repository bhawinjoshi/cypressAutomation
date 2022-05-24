Feature: Login as a Client

    Scenario: Login to Moneta application as client

        Given Hit the Moneta URL as Client
        When User enters Email address as 'automationtest@codaldemo.com'
        And User clicks on Next button
        And User enters password as 'Moneta@123'
        And User clicks on Login button
        Then Dashboard page should be displayed
