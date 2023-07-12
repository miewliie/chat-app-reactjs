describe('chat', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
      })
      context('Admin', () => {
        it('should be able to send text to chat', () =>{
            const chatTitle = 'Food community';
            const msg = 'Hi everyone 😃';
            cy.loginAsAdmin();
            cy.createChat(chatTitle);

            cy.get('.message-input').type(`${msg} {enter}`);
            cy.get('[data-test="message-block"]').contains(`${msg}`);

            cy.get('[data-test="read-receipt"]').should('be.visible');
            cy.deleteChat(`${chatTitle}`);
        })
    
        it.only('should be able to upload image to chat', () => {
            const chatTitle = 'Food community';
            cy.loginAsAdmin();
            cy.createChat(chatTitle);

            cy.get('input[type=file]').selectFile('cypress/assets/mimikyu.webp');
            cy.wait(2000);
            cy.get('.message-image').should('be.visible');
            cy.get('[data-test="read-receipt"]').should('be.visible');

            cy.deleteChat(`${chatTitle}`);
        });
      });

})