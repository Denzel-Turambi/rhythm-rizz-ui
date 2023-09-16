describe('Single Card Spec', () => {
  beforeEach(()=>{
    cy.intercept('GET', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems', {
      statusCode: 201,
      fixture: 'poems'
    }).as("poems")
    cy.intercept('GET', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems/2', {
      statusCode: 201,
      fixture: 'selectPoem'
    }).as("selectPoem")
    cy.intercept('GET', 'https://rhythm-rizz-api-git-main-scotty-brown.vercel.app/api/v1/poems/1', {
      statusCode: 201,
      fixture: 'randomPoem'
    }).as("randomPoem")

  })

  it('Should show a selected poem page', () => {
    cy.visit('https://rhythm-rizz-ui.vercel.app/').wait("@poems")
    .get('.poem-card').first().click().wait("@selectPoem")
    .url().should('contain', '/2')
    .get('.single-poem-card').should('have.length', 1).should('be.visible')
    .get('.single-poem-title').contains('h1','Sad Day')
    .get('.single-poem-author').contains('h2','Written by: Kapowies')
    .get('.single-poem-text').contains('p', "On a somber day, the skies are gray, As tears of rain obscure the way. A heavy heart burdened with sorrow, Longs for a brighter, hopeful tomorrow.")
    .get('.nav-buttons').should("be.visible")
    .get('.random-poem').should('contain', "Next Poem")
  })

  it('Should show you another poem after Next Poem is clicked', () => {
    cy.visit('https://rhythm-rizz-ui.vercel.app/').wait("@poems")
    .get('.poem-card').first().click().wait("@selectPoem")
    .url().should('contain', '/2')
    .get('.random-poem').click().wait('@randomPoem')
    .get('.single-poem-card').should('have.length', 1).should('be.visible')
    .get('.single-poem-title').contains('h1','Happy Day')
    .get('.single-poem-author').contains('h2','Written by: Kapowies')
    .get('.single-poem-text').contains('p', "On a happy day, the sun does shine, Its golden rays, a gift divine.The world awakens with a cheerful song, As nature's beauty dances along.")
    .get('.nav-buttons').should("be.visible")
  })

})