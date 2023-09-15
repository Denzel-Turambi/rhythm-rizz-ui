describe('Error Componenet testing', () => {
  it('Should show a 404 error if page load fails', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 404,
    }).as('404')
    cy.visit('http://localhost:3001/')

    cy.wait('@404')
    cy.get('.error-box').should('exist')
    .get('h1.error-text').should('contain', 'Oops! Page not found!')
    .get('.error-box > :nth-child(2)').should('contain', 'Error 404, a digital twist,')
    .get('.error-button').should('contain', 'Try Again')
  })

  it('Should show a 500 error if url is invalid', () => {
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 500,
    }).as('500')
    cy.visit('http://localhost:3001/')
    cy.wait('@500')
    cy.get('.error-box').should('exist')
    .get('h1.error-text').should('contain', 'Oops! Page not found!')
    .get('.error-box > :nth-child(2)').should('contain', 'Error 500, a digital twist,')
    .get('.error-button').should('contain', 'Try Again')
  })
})