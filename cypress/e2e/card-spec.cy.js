describe('All ellements on the home page', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 201,
      fixture: 'poems'
    }).as("poems")
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems/2', {
      statusCode: 201,
      fixture: 'selectPoem'
    }).as("selectPoem")
  })

  it('should show a selected poem page', () => {
    cy.visit('http://localhost:3001/').wait("@poems")
    .get('.poem-card').first().click().wait("@selectPoem")
    .url().should('contain', '/2')
    .get('.single-poem-card').should('have.length', 1).should('be.visible')
    .get('.single-poem-title').contains('h1','Sad Day')
    .get('.single-poem-author').contains('h2','Written by: Kapowies')
    .get('.single-poem-text').contains('p', "On a somber day, the skies are gray, As tears of rain obscure the way. A heavy heart burdened with sorrow, Longs for a brighter, hopeful tomorrow.")
    .get('.nav-buttons').should("be.visible")
  })
})