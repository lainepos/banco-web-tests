Cypress.Commands.add('FazerLoginComCredenciasValidas', () => {

     cy.fixture('credenciais').then(credenciais => { 
        cy.get('#username').click()
        cy.get('#username').type(credenciais.valida.usuario)
        cy.get('#senha').click()
        cy.get('#senha').type(credenciais.valida.senha)
        })

        cy.screenshot(' apos-preencher-dados-validos')
        cy.get('#login-section > .btn').click()
        cy.screenshot(' apos-clicar-no-botao-entrar')
})

Cypress.Commands.add('FazerLoginComCredenciasInvalidas', () => {

     cy.fixture('credenciais').then(credenciais => { 
      
      cy.get('#username').click()
      cy.get('#username').type(credenciais.invalida.usuario)
      cy.get('#senha').click()
      cy.get('#senha').type(credenciais.invalida.senha)

     })
      cy.get('#login-section > .btn').click()


})