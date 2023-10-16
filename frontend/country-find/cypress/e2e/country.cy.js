describe('test inputting and displaying a country', () => {
  it('should input a country and display its contents on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="linked"]').click()
    cy.get('[data-cy="input"]').type("ireland")
    cy.get('[data-cy="submit"]').click()

    cy.get('[data-cy="country-name"]').contains('Republic of Ireland')
  })
})

describe('testing error message for inputting invalid country', () => {
  it('should input a country and display its contents on the page', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-cy="linked"]').click()
    cy.get('[data-cy="input"]').type("fakecountry")
    cy.get('[data-cy="submit"]').click()

    cy.get('[data-cy="error-message"]').contains('error')
  })
})