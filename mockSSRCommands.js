beforeEach(() => {
  cy.clearSSRMocks()
})

after(() => {
  cy.clearSSRMocks()
})

Cypress.Commands.add("mockSSR", (payload) => {
  cy.request("POST", "/__cypress_server_mock", payload)
})

Cypress.Commands.add("clearSSRMocks", () => {
  cy.request("/__cypress_clear_mocks")
})
