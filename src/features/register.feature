Feature: Register Functionality - Create Account

    Scenario: Verify creating account with valid details
        Given user is on home page
        When user clicks on signin link
        And user clicks on create account link
        And user enter name as "testname5"
        And user enter email id as "testname5@gmail.com"
        And user enter password "Test@1234" and confirm password "Test@1234"
        And user clicks on signup button
        Then user created account successfully and navigated to "My Portal | electronicpro" title page

    Scenario: verify creating account with invalid details
        Given user is on home page
        When user clicks on signin link
        And user clicks on create account link
        And user enter name as "testname5"
        And user enter email id as "testname5@gmail"
        And user enter password "Test@1234" and confirm password "Test@1234"
        And user clicks on signup button
        Then shows error msg as "Login must be a valid email address"

    Scenario: Verify creating account with different passwords
        Given user is on home page
        When user clicks on signin link
        And user clicks on create account link
        And user enter name as "testname5"
        And user enter email id as "testname5@gmail.com"
        And user enter password "Test@1234" and confirm password "Test"
        And user clicks on signup button
        Then shows error msg as "Passwords do not match; please retype them."




