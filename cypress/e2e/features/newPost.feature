Feature: Validating New post

Background: 
    Given I access the home page
    And Click in Sign In
    When fill in the email field "testeemail@teste2.com.br"
    And fill in the password field "teste"
    And Click on the Sign In Button
    And Click on the New Post


Scenario: CT001: Validate Blank "Title"
        Given Don't fill in any fields
        When click on botton Publish Article
        Then Must present a mandatory message "title can't be blank"

Scenario: CT002: Validate Blank "Description"
        Given Fill in the title field with "Teste"
        And Fill in the body field with "Teste"
        And Fill in the tag field with "Teste"
        When click on botton Publish Article
        Then Must present a mandatory message "description can't be blank"

Scenario: CT003: Validate Blank "Body"
        Given Fill in the title field with "Teste"
        And Fill in the description field with "Teste"
        And Fill in the tag field with "Teste"
        When click on botton Publish Article
        Then Must present a mandatory message "body can't be blank"

Scenario: CT004: Validate Blank "Tag"
        Given Fill in the title field with "Teste"
        And Fill in the description field with "Teste"
        And Fill in the body field with "Teste"
        When click on botton Publish Article
        Then Must present a mandatory message "body can't be blank"

Scenario: CT005: Registered Post
        Given Fill in the title field with "Teste"
        And Fill in the description field with "Teste"
        And Fill in the body field with "Teste"
        And Fill in the tag field with "Teste"
        When click on botton Publish Article
        Then Post will be registered and the title will be highlighted





