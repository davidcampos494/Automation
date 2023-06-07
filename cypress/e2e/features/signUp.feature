Feature: Validating Sign In

Background: 
    Given I access the home page
    When Page load
    Then Click in "Sign up"

Scenario: CT001: Validating Link "Have an account?"
        When click on the link Have an account?
        Then Will load the login screen

Scenario: CT002: Clicking the Sign Up Button Without Filling in Any Fields
        Given Didn't fill in any fields
        When Click on the Sign Up Button
        Then Must display the message "Preencha este campo." in the field Your Name

Scenario: CT003: Validate Field Required Field of Field "Your name"
        Given fill in the email field "teste@teste.com"
        And fill in the password field "teste"
        When Click on the Sign Up Button
        Then Must display the message "Preencha este campo." in the field Your Name

Scenario: CT004: Validate Field Required Field of Field "Email"
        Given fill in the username field "teste@teste.com"
        And fill in the password field "teste"
        When Click on the Sign Up Button
        Then Must display the message "Preencha este campo." in the field email

Scenario: CT005: Validate Field Required Field of Field "Password"
        Given fill in the username field "teste name"
        And fill in the email field "teste@teste.com"
        When Click on the Sign Up Button
        Then Must display the message "Preencha este campo." in the field password

Scenario: CT006: Validating Email Without the "@"
        Given fill in the username field "teste name"
        And fill in the email field "teste"
        And fill in the password field "teste"
        When Click on the Sign Up Button
        Then Must display the message 'Inclua um "@"' in the field email

Scenario: CT007: Validating Email up to @
        Given fill in the username field "teste name"
        And fill in the email field "teste@"
        And fill in the password field "teste"
        When Click on the Sign Up Button
        Then Must display the message 'Insira uma parte' in the field email

Scenario: CT008: Validate Already Used Email message
        Given fill in the username field "Name"
        And fill in the email field "teste@teste.com"
        And fill in the password field "teste"
        When Click on the Sign Up Button
        Then It should display the message in red "email has already been taken"

Scenario: CT009: Performing a Successful Registration
        Given fill in the username field with any name
        And fill in the email field with any email
        And fill in the password field with any password
        When Click on the Sign Up Button
        Then the registration will be successful and the user name will appear on the home screen





