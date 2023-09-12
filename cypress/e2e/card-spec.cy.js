describe('all ellements on the home page', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 200,
      fixture: 'poems'
    }).as("poems")
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems/1', {
      statusCode: 200,
      fixture: 'selectPoem'
    }).as("selectPoem")
  })

  it('should show a selected poem page', () => {
    cy.visit('http://localhost:3001/')
    .wait("@poems")
    .get('.poem-card').first().click()
    .wait("@selectPoem")
    .get('.single-poem-card').should('have.length', 1).should('be.visible')
  })
})