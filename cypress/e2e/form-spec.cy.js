describe('New poem form', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 200,
      fixture: 'poems'
    }).as("poems")
  })



  it('Should show form when you select Form button', () => {
    cy.visit('http://localhost:3001/')
    .wait('@poems')

    .get('[href="/form"] > .nav-button').click()

  })
})