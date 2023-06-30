describe('login', () => {
  let url, username, password;

  before(() => {
    url = Cypress.env('BASE_URL');
    username = Cypress.env('USERNAME');
    password = Cypress.env('PASSWORD');
  });
  
  beforeEach(() => {
    cy.visit(url);
  })
  
  context("Wrong creds", () => {
    it('user should see placeholder at login fields', () => {
      cy.getByData("username").should('have.attr', 'placeholder', 'Username');
      cy.getByData("password").should('have.attr', 'placeholder', 'Password');
      cy.getByData("submit-text").contains('Start chatting');
    })
    
    it('user should see error message when input wrong credentials', () => {
      cy.login("hello", "123pw");
      cy.getByData("error").contains('Oops, incorrect credentials.');
    })
  })
  
  context("Login success", () => {
    it('user should be able to login with correct credentials', () => {
      cy.login(username, password);
      cy.getByData("chat-title-container").should("exist");
  })
})

})