/// <reference types="cypress" /> 

describe("Todos os testes para inclusão de um contato à lista", () => {

    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it("Deve inserir valores nos campos de input e adicionar na lista", () => {
        //inserindo valores nos campos de input 
        cy.get('input[type="text"]').type('Gabriel Lisboa')
        cy.get('input[type="email"]').type('gabriel.lisboadv@gmail.com')
        cy.get('input[type="tel"]').type('85998523779')

        //efetuando o clique do botão de adicionar
        cy.get('button[type="submit"]').click()

        //fazendo a asserção de que deverá ter 4 contatos na list
        cy.get('.sc-beqWaB.eQdhbg.contato').should('have.length', 4)
        
        //verificando se o número de contatos tbm está atualizado
        cy.get('.sc-jTrPJq.bgKOAx h2').should('contain', '4 contatos na agenda')
    })
})