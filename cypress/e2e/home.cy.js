describe('all ellements on the home page', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems/', {
      fixture: 'poems'
    })
  })

  it('should have a header, nav options, and poems displayed', () => {
    cy.visit('https://example.cypress.io')
  })
})