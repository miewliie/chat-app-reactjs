Cypress.Commands.add("createChat", (chatTitle) => {
    cy.get('.ce-chat-form-container').contains('My Chats');
    cy.get('#new-chat-plus-button').click();
    cy.wait(2000)
    cy.get('#ce-new-chat-title-field').type(`${chatTitle} {enter}`);
    cy.wait(3000)
    cy.get('[data-test="chat-title"]').contains(`${chatTitle}`);
})

Cypress.Commands.add("deleteChat", (chatTitle) => {
    cy.contains('Options').click();
    cy.contains('Delete').click();
    cy.get('[data-test="chat-title"]').should('not.contain.text', `${chatTitle}`);
})
