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
    cy.visit('http://localhost:3001/').wait("@poems")
    .get('.poem-card').first().click().wait("@selectPoem")
    .url().should('contain', '/1')
    .get('.single-poem-card').should('have.length', 1).should('be.visible')
    .get('.poem-title').contains('h1','Happy Day')
    .get('.poem-author').contains('h2','Written by Kapowies')
    .get('.poem-text').contains('p', "On a happy day, the sun does shine, Its golden rays, a gift divine.The world awakens with a cheerful song, As nature's beauty dances along.")
    .get('.nav-buttons').should("be.visible")
  })
})