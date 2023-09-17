describe('New Poem Form', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems', {
      statusCode: 200,
      fixture: 'poems'
    }).as("poems")

    cy.intercept('POST', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems', {
      statusCode: 200,
      fixture: 'postPoems'
    }).as('postPoems')
  })

  it('Should show form when you select Form button', () => {
    cy.visit('https://rhythm-rizz-ui.vercel.app/')
    .wait('@poems')

    .get('[href="/form"]').should('contain', 'Add New Poem').click()
    cy.url().should('contain', '/form')
    cy.get('[placeholder="Title"]').type('Testing Nightmare').should('have.value', 'Testing Nightmare')
    cy.get('[placeholder="Author"]').type('Cypress Student').should('have.value', 'Cypress Student')
    cy.get('textarea.form-input').type('Poem Poem oh so fun, poem poem my work here is done').should('have.value', 'Poem Poem oh so fun, poem poem my work here is done')
    cy.get('.form-button').click().wait('@postPoems')
    cy.get('[href="/3"] > .poem-card').should('exist')
    cy.get('.poems-container').children().first().should('contain', 'Testing Nightmare')
    cy.get('.poems-container').children().first().should('contain', 'Written by Cypress Student')
  })
})