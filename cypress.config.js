const {
  defineConfig
} = require("cypress");
const fs = require('fs-extra');
const path = require('path');
const cucumber = require('cypress-cucumber-preprocessor').default;


function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('cypress\\config', `${file}.json`)

  if (!fs.existsSync(pathToConfigFile)) {
    console.log("No custom config file found.");
    return {};
  }

  return fs.readJSON(pathToConfigFile);
}



module.exports = defineConfig({
  e2e: {

    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())

      const file = config.env.configFile || ''

      return getConfigurationByFile(file)

      // implement node event listeners here
    },
    env: {
      requestMode: true, // serve para nao ter que substituir todos o cy.request por cy.api, por causa do plugin 
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    experimentalRunAllSpecs: true, // serve para poder executar todos os testes em modo app cypress
    baseUrl: 'http://127.0.0.1:5173/',
    // chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false
  },
});