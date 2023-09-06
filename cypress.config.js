const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  execTimeout: 120000,
  pageLoadTimeout: 120000,
  requestTimeout: 10000,
  responseTimeout: 120000,
  video: false, // for videos folder
  videoUploadOnPasses: false, // for dashboard video
  chromeWebSecurity: false,
  reporter: "cypress-mochawesome-reporter",
  viewportWidth: 1920,
  viewportHeight: 1080,
   reporterOptions: {
    charts: true,
    reportPageTitle: "custom-title",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    reportDir: "cypress/reports",
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    testIsolation: false,
  },

  
});
