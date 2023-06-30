describe('login', () => {

  before(() => {
    Cypress.on('before:browser:launch', (launchOptions) => {
      const { BASE_URL, USERNAME, PASSWORD } = Cypress.env();

        launchOptions.env.BASE_URL = BASE_URL;
        launchOptions.env.USERNAME = USERNAME;
        launchOptions.env.PASSWORD = PASSWORD;

      return launchOptions;
    });
  });
  
  beforeEach(() => {
    cy.visit(Cypress.env('BASE_URL'));
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
      const username = Cypress.env('USERNAME');
      const password = Cypress.env('PASSWORD');
      cy.login(username, password);
      cy.getByData("chat-title-container").should("exist");
  })
})

})