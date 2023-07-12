const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    "USERNAME": process.env.CYPRESS_USERNAME,
    "PASSWORD":process.env.CYPRESS_PASSWORD,
    "BASEURL": process.env.CYPRESS_BASEURL
  }
});
