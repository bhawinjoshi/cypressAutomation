Feature: Login as Advisor

    Scenario: Login to Moneta application as advisor

        Given Hit the Moneta URL as Advisor
        When User enters Email address as 'advisorautomationtest@codaldemo.com'
        And User clicks on Next button
        And User enters password as 'Moneta@123'
        And User clicks on Login button
        Then Dashboard page should be displayed

