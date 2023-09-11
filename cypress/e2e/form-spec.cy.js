describe('New poem form', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 200,
      fixture: 'poems'
    }).as("poems")

    cy.intercept('POST', 'http://localhost:3000/api/v1/poems', {
      statusCode: 200,
      fixture: 'postPoems'
    }).as('postPoems')
  })

  it('Should show form when you select Form button', () => {
    cy.visit('http://localhost:3001/')
    .wait('@poems')

    .get('[href="/form"]').should('contain', 'Add New Poem').click()
    cy.url().should('contain', '/form')
    cy.get('[placeholder="Title"]').type('Testing Nightmare').should('have.value', 'Testing Nightmare')
    cy.get('[placeholder="Author"]').type('Cypress Student').should('have.value', 'Cypress Student')
    cy.get('textarea.form-input').type('Insert Poem Here').should('have.value', 'Insert Poem Here')
    cy.get('.form-button').click().wait('@postPoems')
    cy.get('[href="/3"] > .poem-card').should('exist')
    cy.get('.poems-container').children().last().should('contain', 'Testing Nightmare')
  })
})