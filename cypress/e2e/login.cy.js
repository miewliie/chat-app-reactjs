describe('login', () => {

  context("Wrong creds", () => {
    it('user should see placeholder at login fields', () => {
      cy.visit('http://localhost:3000/');
      cy.getByData("username").should('have.attr', 'placeholder', 'Username');
      cy.getByData("password").should('have.attr', 'placeholder', 'Password');
      cy.getByData("submit-text").contains('Start chatting');
    })
    
    it('user should see error message when input wrong credentials', () => {
      cy.visit('http://localhost:3000/');
      cy.login("hello", "123pw");
      cy.getByData("error").contains('Oops, incorrect credentials.');
    })
  })
  
  context("Login success", () => {
    it('user should be able to login with correct credentials', () => {
      cy.visit('http://localhost:3000/');
    cy.login(Cypress.env('CYPRESS_USERNAME'), Cypress.env('CYPRESS_PASSWORD'));
    cy.getByData("chat-title-container").should("exist");
  })
})

})