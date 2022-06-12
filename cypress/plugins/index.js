/// <reference types="cypress" />
// ***********************************************************

/**
 * @type {Cypress.PluginConfig}
 */
import { downloadFile } from 'cypress-downloadfile/lib/addPlugin'

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

module.exports = (on, config) => {
  on('task', { downloadFile })
}
