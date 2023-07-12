const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env = config.env || {}
      config.env.CYPRESS_USERNAME = process.env.CYPRESS_USERNAME,
      config.env.CYPRESS_PASSWORD = process.env.CYPRESS_PASSWORD,
      config.env.CYPRESS_BASEURL = process.env.CYPRESS_BASEURL,
      config.env.ADMIN = process.env.ADMIN,
      config.env.ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

      return config
    },
  }
});
