/// <reference types="cypress" /> 

describe("Todos os testes para alteração de um contato", () => {

    beforeEach( () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    } )

    it('Deve editar o contato quando o botão salvar for clicado', () => {
    //clicando o botão de editar dentro da div do card de contato
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()

    //Limpando os valores dos inputs
    cy.get('input[type="text"]').clear()
    cy.get('input[type="email"]').clear()
    cy.get('input[type="tel"]').clear()

    //inserindo valores nos campos de input 
    cy.get('input[type="text"]').type('Gabriel Lisboa')
    cy.get('input[type="email"]').type('gabriel.lisboadv@gmail.com')
    cy.get('input[type="tel"]').type('85998523779')

    //clicando no botão de salvar o contato editado
    cy.get('.alterar').click()

    //verificando se os campos estão atualizados corretamente
    cy.get('.sc-eDDNvR > :nth-child(1)').should('contain', 'Gabriel Lisboa')
    cy.get('.sc-eDDNvR > :nth-child(2)').should('contain', '85998523779')
    cy.get('.sc-eDDNvR > :nth-child(3)').should('contain', 'gabriel.lisboadv@gmail.com')
    })

})