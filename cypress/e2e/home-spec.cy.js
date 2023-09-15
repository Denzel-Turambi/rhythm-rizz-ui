describe('all ellements on the home page', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'http://localhost:3000/api/v1/poems', {
      statusCode: 200,
      fixture: 'poems'
    }).as("poems")
  })

  it('should have a header, nav options, and poems displayed', () => {
    cy.visit('http://localhost:3001/')
    .wait("@poems")
    .get('.nav').contains('.logo-title', 'Rhythm & Rizz').should('be.visible')
    .get('.nav-button').contains('.nav-button', 'Add New Poem').should('be.visible').click()
    cy.get('.form-container').should('be.visible')
    cy.get('.nav-buttons > [href="/"]').click()
    .get('.nav-button').contains('.nav-button', 'Poems').should('be.visible')
    .get('.poems-container').children().first().contains('h1', 'Sad Day').should('be.visible')
    .get('.poems-container').children().first().contains('h2', 'Written by Kapowies')
    .get('.poem-text').first().contains('p', "On a somber day, the skies are gray, As tears of rain obscure the way. A heavy heart burdened with sorrow, Longs for a brighter, hopeful tomorrow.")
    .get('.poems-container').children().last().contains('h1', 'Happy Day').should('be.visible')
    .get('.poems-container').children().last().contains('h2', 'Written by Kapowies')
    .get('.poem-text').last().contains('p', "On a happy day, the sun does shine, Its golden rays, a gift divine.The world awakens with a cheerful song, As nature's beauty dances along.")
  })
})