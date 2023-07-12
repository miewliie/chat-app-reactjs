Cypress.Commands.add("login", (username, password) => {
    cy.getByData("username").type(username);
    cy.getByData("password").type(password);
    cy.getByData("submit").click();
})

Cypress.Commands.add("loginAsAdmin", () => {
    cy.getByData("username").type(Cypress.env('ADMIN'));
    cy.getByData("password").type(Cypress.env('ADMIN_PASSWORD'));
    cy.getByData("submit").click();
})