describe('login', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('user should see error message when input wrong credentials', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-test="username"]').type('hello');
    cy.get('[data-test="password"]').type('pw');
    cy.get('[data-test="submit"]').click();
    cy.get('[data-test="error"]').should('contain', 'Oops, incorrect credentials.');
  })
})