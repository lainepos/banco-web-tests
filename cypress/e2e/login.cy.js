describe('Login', () => {
  beforeEach( () => {
    cy.visit('/')
    cy.screenshot(' apos-acessar-a-pagina-de-login')
  })


  it('Login com dados válidos deve permitir entrada no sistema', () => {
    
    cy.FazerLoginComCredenciasValidas()  

    cy.contains('h4', 'Realizar Transferência').should('be.visible')

    
  })
    it('Login com dados inválidos deve apresentar mensagem de erro', () => {
      cy.FazerLoginComCredenciasInvalidas()  
     
      cy.get('.toast').should('have.text','Erro no login. Tente novamente.')   

    
  })


})