Feature: Validating Sign In

Background: 
    Given I access the home page
    When Page load
    Then Click in Sign In

Scenario: CT001: Validating link "Need an account?"
        When Click on the link Need an account?
        Then Will load the Sign Up screen

Scenario: CT002: Invalid "Email" and "Password"
        Given fill in the email field with any email
        And fill in the password field with any password
        When Click on the Sign In Button
        Then Should show an error message

Scenario: CT003: Validating Valid "Email" Wrong "Password"
        Given fill in the email field "testeemail@teste2.com.br"
        And fill in the password field "errado"
        When Click on the Sign In Button
        Then Should show an error message

Scenario: CT004: Invalid "Email" and Valid "Password"
        Given fill in the email field "testeemail@teste2.com.br"
        And fill in the password field "teste"
        When Click on the Sign In Button
        Then Should show an error message

Scenario: CT005: Accessing With Valid Data
        Given fill in the email field "testeemail@teste2.com.br"
        And fill in the password field "teste"
        When Click on the Sign In Button
        Then the registration will be successful and the user name "Teste Name Completo" will appear on the home screen




