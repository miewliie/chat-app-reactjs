describe('login', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('user should see error message when input wrong credentials', () => {
    cy.visit('http://localhost:3000/')
    cy.get('[data-cy="username"]').type('hello');
    cy.get('[data-cy="password"]').type('pw');
    cy.get('[data-cy="submit"]').click();
    cy.get('[data-cy="error"]').should('contain', 'Oops, incorrect credentials.');
  })
})