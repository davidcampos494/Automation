# Testes _end-to-end_ com Cypress

Sample project to demonstrate end-to-end (e2e) tests with Cypress .

## Pre-requirements

To run this project, you will need:

- [nodejs](https://nodejs.org/en/) (I've used version `16.17.1`)
- NPM (I've used version `8.15.0` while writing this doc)
- [Google Chrome](https://www.google.com/intl/en_us/chrome/) (I've used version `112.0.5615.86` while writing this doc)
- [Cypress] (I've used version `12.9.0`)
- [cypress-cucumber-preprocessor] (I've used version `4.3.1`)

**Note:** When installing nodejs, NPM is automatically installed too.

## Installation

To install the dev dependencies, run `npm install` (or `npm i` for short.)


## Running the tests

In this project, you can run tests in interactive and headless modes, and on desktop and tablet viewports.

### Headless mode

Run `cypress run` (or `npm t` for short) to run all tests in headless mode.
or
npx cypress run --spec "cypress/e2e/features/newPost.feature" if you want execut especific feature

### Report Generation
First execute comand "npx cypress run" to execute all features or px cypress run --spec "cypress/e2e/features/newPost.feature" if you want execut an especific feature
Next use comand node .\cucumber-html-report.js to generat the report

### Interactive mode

Run `npm run cypress:open` to open the Cypress Test Runner to run tests in interactive mode using a desktop viewport.

Run `npm run cypress:run` to open the Cypress Test Runner to run tests in interactive mode using a tablet viewport.