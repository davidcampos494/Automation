import {
    Before,
    Given,
    When,
    Then,
    And
}
from "cypress-cucumber-preprocessor/steps"
import loc from "../../support/locators"
import {
    faker
} from '@faker-js/faker';
/// <reference types="cypress" />

const randomFullName = faker.helpers.fake('{{name.firstName}} {{name.lastName}}')
const randomEmail = faker.internet.email(randomFullName)
const randomPassword = faker.internet.password(8, true)

let nameTeste = randomFullName
Given("I access the home page", () => {
    cy.visit('')
})

When("Page load", () => {

})

Then("Click in {string}", (text) => {
    cy.xpath(loc.HOME.FN_XP_LOGIN_REGIS(text)).click()
})

When("click on the link Have an account?", () => {
    cy.xpath(loc.SIGNUP.XP_HAVE_ACCOUNT).click()
})

Given("Didn't fill in any fields", () => {

})

When("Click on the Sign Up Button", () => {
    cy.xpath(loc.SIGNUP.XP_BT_SIGN_UP).click()
})

Then("Must display the message {string} in the field Your Name", (alert) => {

    cy.get(loc.SIGNUP.USER_NAME).then(($input) => {
        expect($input[0].validationMessage).to.eq(alert)
    })
})

Then("Must display the message {string} in the field email", (alert) => {

    cy.get(loc.SIGNUP.EMAIL).then(($input) => {
        expect($input[0].validationMessage).contain(alert)
    })
})

Then("Must display the message {string} in the field password", (alert) => {

    cy.get(loc.SIGNUP.PASSWORD).then(($input) => {
        expect($input[0].validationMessage).to.eq(alert)
    })
})

Given("fill in the email field {string}", (msg) => {
    cy.get(loc.SIGNUP.EMAIL).type(msg)

})

And("fill in the password field {string}", (msg) => {
    cy.get(loc.SIGNUP.PASSWORD).type(msg)

})

And("fill in the username field {string}", (msg) => {
    cy.get(loc.SIGNUP.USER_NAME).type(msg)

})

Then("It should display the message in red {string}", (message) => {
    cy.xpath(loc.SIGNUP.XP_MESSAGE(message)).should('contain', message)
})

Given("Have already registered", () => {
    cy.register()
})

And("reload the page", () => {
    cy.reload()
})

Given("fill in the username field with any name", () => {
    cy.get(loc.SIGNUP.USER_NAME).type(nameTeste)
})

And("fill in the email field with any email", () => {
    cy.get(loc.SIGNUP.EMAIL).type(randomEmail)
})

And("fill in the password field with any password", () => {
    cy.get(loc.SIGNUP.PASSWORD).type(randomPassword)

})

Then("the registration will be successful and the user name will appear on the home screen", () => {
    cy.xpath(loc.SIGNUP.XP_NAME_USER(nameTeste), {
        timeout: 2000
    }).should('contain', nameTeste)
})