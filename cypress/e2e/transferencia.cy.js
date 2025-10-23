describe('Transferencias', () => {
  beforeEach( () => {
    cy.visit('/')
       cy.FazerLoginComCredenciasValidas()  

     
  })


it('Deve transferir quando informo dados e valor validos', () => {
   cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
   cy.get('@campo-conta-origem').click()
   cy.get('@campo-conta-origem').contains('Maria Oliveira').click()

     cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
   cy.get('@campo-conta-destino').click()
   cy.get('@campo-conta-destino').contains('João da Silva').click()

   cy.get('#valor').click().type('11')
   cy.contains('button', 'Transferir').click()

   cy.get('.toast').should('have.text', 'Transferência realizada!' )
  })

  it('Deve apresentar erro quando tentar transferir mais que 5 mil sem token', () => {
   cy.get('label[for="conta-origem"]').parent().as('campo-conta-origem')
   cy.get('@campo-conta-origem').click()
   cy.get('@campo-conta-origem').contains('Maria Oliveira').click()

     cy.get('label[for="conta-destino"]').parent().as('campo-conta-destino')
   cy.get('@campo-conta-destino').click()
   cy.get('@campo-conta-destino').contains('João da Silva').click()

   cy.get('#valor').click().type('5000.01')
   cy.contains('button', 'Transferir').click()

   cy.get('.toast').should('have.text', 'Autenticação necessária para transferências acima de R$5.000,00.' )
  })

})