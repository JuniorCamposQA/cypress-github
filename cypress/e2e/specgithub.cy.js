describe('Acessar StarBugs', () => {
  it('Comprar capuccino', () => {
    cy.visit('https://starbugs-qa.vercel.app/')
    cy.get(':nth-child(7) > .sc-ilhmMj > .sc-jIRcFI > .buy-coffee').click()
    cy.get('.sc-idXgbr').click()
    cy.get('[name="cep"]').type('24452210')
    cy.get('.button-cep > .sc-bqWxrE > .sc-ksBlkl').click()
    cy.get('[name="number"]').click().type('70')
    cy.get(':nth-child(3) > label > .sc-fEXmlR').click()
    cy.get('.sc-idXgbr').click()
    cy.get('.sc-cjibBx').contains('Uhull! Pedido confirmado')

  })
})