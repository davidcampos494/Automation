import {
    Before,
    Given,
    When,
    Then,
    And
} from "cypress-cucumber-preprocessor/steps"

import loc from "../../support/locators"

/// <reference types="cypress" />

Given("I access the home page", () => {
    cy.visit('')
})

When("Page load", () => {

})

Then("In the upper left corner you should display the title {string}", (title) => {
    // cy.get(loc.HOME.TITLE).should('contain', 'conduit')
    cy.get(loc.HOME.TITLE).invoke('text').then((text) => {
        expect(text).to.be.equal(title)
    })
})

And("Not logged in", () => {

})

Then("It must present the field {string}", (message) => {
    cy.get(loc.HOME.GLOBALFE).should('contain', message)

})

When("Click on the name of the author {string} of the post", (author) => {
    cy.xpath(loc.HOME.FN_XP_NAME_AUTHOR(author)).click()
})

Then("You should load a new page with the author's name {string} as the title", (title) => {
    cy.xpath(loc.HOME.FN_XP_AUTHOR_TITLE(title)).should('contain', title)
})

And("Below it should present 2 tabs {string} and {string}", (text1, text2) => {
    cy.xpath(loc.HOME.FN_XP_PG_TABS(text1)).should('contain', text1)
    cy.xpath(loc.HOME.FN_XP_PG_TABS(text2)).should('contain', text2)

})

When("Click on the image next to the author {string} of the post", (img) => {
    cy.xpath(loc.HOME.FN_XP_IMG_AUTHOR(img)).click()
})

When("click on the tab Sign in to see your Feed", () => {
    cy.xpath(loc.HOME.XP_SIGNIN_FEED).click()
})

Then("Will load the login screen", () => {
    cy.xpath(loc.LOGIN.XP_TITLE).should('contain', 'Sign In')
})

Then("In the post field, below the name must present the date {string}", (date) => {
    cy.xpath(loc.HOME.FN_XP_Date(date)).should('contain', date)
})

When("Click on the Read More field at the end of the post", () => {
    cy.xpath(loc.HOME.XP_READ_MORE).click()
})

Then("will load a new page with the title of the post highlighted {string}", (title) => {
    cy.xpath(loc.HOME.XP_TITLE_READ_MORE(title)).should('contain', title)
})

And("Must display all posts related to the selected author {string}", (authors) => {
    cy.xpath(loc.HOME.FN_XP_ALL_AUTHORS(authors)).should('contain', authors)

})

When("Click on the {string} link at the bottom of the page", (login) => {
    cy.xpath(loc.HOME.FN_XP_SIGN_IN_UP(login)).click()
})

When("click on the tab {string}", (tag) => {
    cy.xpath(loc.HOME.FN_XP_TAGS(tag)).click()
})

Then("Will load the Sign Up screen", () => {
    cy.xpath(loc.SIGNUP.XP_TITLE).should('contain', 'Sign up')
})

When("Click on the {string} link that is next to the red more of the first post", (link) => {
    cy.xpath(loc.HOME.FN_XP_LINKS_POST(link)).click()
})

Then("Will display a new tab named {string}", (tab) => {
    cy.xpath(loc.HOME.FN_XP_LINKS_POST(tab)).should('contain', tab)
})

When("Scroll to the end of the page and click on page {int}", (pg) => {
    cy.scrollTo('bottom')
    cy.xpath(loc.HOME.FN_XP_PAGE(pg)).click()
})

Then("The page should be directed to tab {int}", (pg) => {
    cy.url()
        .should('be.equal', `http://127.0.0.1:5173/?tab=all&page=${pg}`)
})