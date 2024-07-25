/// <reference types="cypress" /> 

describe('Todos os testes para remoção de um contato', () => {
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    } )

    it('O contato deve ser removido corretamente', () => {
        cy.get('.delete').click({multiple: true})
        cy.get('sc-beqWaB.eQdhbg.contato').should('have.length', 0)
        cy.get('.sc-jTrPJq.bgKOAx h2').should('contain', '0 contatos na agenda')
    })
})