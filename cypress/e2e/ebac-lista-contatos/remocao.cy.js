/// <reference types="cypress" /> 

describe('Todos os testes para remoção de um contato', () => {
    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    } )

    it('O contato deve ser removido corretamente', () => {
        cy.get('.delete').each(($componente) => {
            //em cada componente que tiver essa classe .delete, clique nela
            cy.wrap($componente).click()
        })
        cy.get('sc-beqWaB.eQdhbg.contato').should('have.length', 0)
        cy.get('.sc-jTrPJq.bgKOAx h2').should('contain', '0 contatos na agenda')
    })
})