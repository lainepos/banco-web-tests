describe('Login', () => {
  beforeEach( () => {
    cy.visit('http://localhost:4000')
    cy.screenshot(' apos-acessar-a-pagina-de-login')
  })


  it.only('Login com dados válidos deve permitir entrada no sistema', () => {
    
    cy.get('#username').click()
    cy.get('#username').type('julio.lima')
    cy.get('#senha').click()
    cy.get('#senha').type('123456')
    cy.screenshot(' apos-preencher-dados-validos')
    cy.get('#login-section > .btn').click()
    cy.screenshot(' apos-clicar-no-botao-entrar')

    cy.contains('h4', 'Realizar Transferência').should('be.visible')

    
  })
    it('Login com dados inválidos deve apresentar mensagem de erro', () => {
      
      cy.get('#username').click()
      cy.get('#username').type('julio.lima')
      cy.get('#senha').click()
      cy.get('#senha').type('654321')
      cy.get('#login-section > .btn').click()

      cy.get('.toast').should('have.text','Erro no login. Tente novamente.')   

    
  })


})