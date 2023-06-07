import {
    Before,
    Given,
    When,
    Then,
    And
}
from "cypress-cucumber-preprocessor/steps"
import loc from "../../support/locators"

/// <reference types="cypress" />

Given("I access the home page", () => {
    cy.visit('')
})

When("Page load", () => {

})

Then("Click in Sign In", () => {
    cy.xpath(loc.LOGIN.XP_LOGIN).click()
})

When("Click on the link Need an account?", () => {
    cy.xpath(loc.LOGIN.XP_NEED_ACCOUNT).click()
})

When("Click on the Sign In Button", () => {
    cy.xpath(loc.LOGIN.XP_BT_SIGN_IN).click()
})

Then("Should show an error message", () => {
    cy.xpath(loc.LOGIN.XP_MESSAGE_LOGIN_WRONG).should('contain', "Something went wrong")
})

Then("the registration will be successful and the user name {string} will appear on the home screen", (user) => {
    cy.xpath(loc.LOGIN.FN_XP_USER(user)).should('contain', user)
})