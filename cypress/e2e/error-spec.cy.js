describe('Error Componenet testing', () => {
  it('Should show a 404 error if page load fails', () => {
    cy.intercept('GET', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems', {
      statusCode: 404,
    }).as('404')
    cy.visit('https://rhythm-rizz-ui.vercel.app/')

    cy.wait('@404')
    cy.get('.error-box').should('exist')
    .get('h1.error-text').should('contain', 'Oops! Page not found!')
    .get('.error-box > :nth-child(2)').should('contain', 'Error 404, a digital twist,')
    .get('.error-button').should('contain', 'Try Again')
  })

  it('Should show a 500 error if url is invalid', () => {
    cy.intercept('GET', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems', {
      statusCode: 500,
    }).as('500')
    cy.visit('https://rhythm-rizz-ui.vercel.app/')
    cy.wait('@500')
    cy.get('.error-box').should('exist')
    .get('h1.error-text').should('contain', 'Oops! Page not found!')
    .get('.error-box > :nth-child(2)').should('contain', 'Error 500, a digital twist,')
    .get('.error-button').should('contain', 'Try Again')
  })
})