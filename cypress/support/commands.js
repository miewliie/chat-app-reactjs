Cypress.Commands.add("login", (username, password) => {
    cy.getByData("username").type(username);
    cy.getByData("password").type(password);
    cy.getByData("submit").click();
})

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test="${selector}"]`)
})
