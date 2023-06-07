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

const title = faker.helpers.fake('{{name.firstName}}')

let text = title

And("Who has logged into the application", () => {
    cy.register()
})

Given("Don't fill in any fields", () => {

})

And("Click on the New Post", () => {
    cy.xpath(loc.HOME.XP_NEW_POST).click()
})

Then("click on botton Publish Article", () => {
    cy.xpath(loc.NEWPOST.XP_BT_PUBLISH).click()
})

Then("Must present a mandatory message {string}", (msg) => {
    cy.get(loc.NEWPOST.MSG_BLANK_TITLE).should('contain', msg)
})

Given("Fill in the title field with {string}", (title) => {
    cy.get(loc.NEWPOST.NAME_TITLE).type(text)
})

Given("Fill in the description field with {string}", (desc) => {
    cy.get(loc.NEWPOST.DESCRIPTION).type(desc)
})

And("Fill in the body field with {string}", (body) => {
    cy.get(loc.NEWPOST.BODY).type(body)
})

And("Fill in the tag field with {string}", (tag) => {
    cy.get(loc.NEWPOST.TAGS).type(tag)
})

Then("Post will be registered and the title will be highlighted", () => {
    cy.get(loc.NEWPOST.TITLE_REG_POST).should('contain', text)
})