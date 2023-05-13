describe('Click Button', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button').click()
  })
})