/// <reference types = "cypress"/>
describe('navigation',function()
{

it('verify navigation in browser',function()
{
    cy.visit('https://demo.nopcommerce.com/') //open url
    cy.title().should('eq',"nopCommerce demo store") //title verification home page 
    cy.get('.ico-register').click() //clicking on register link
    cy.title().should('eq',"nopCommerce demo store. Register") //title verification for registration page 
    cy.go('back')
    cy.title().should('eq',"nopCommerce demo store") //title verification for home page 
    cy.go('forward')
    cy.title().should('eq',"nopCommerce demo store. Register") //title verification for registration page 
    cy.go(-1)
    cy.title().should('eq',"nopCommerce demo store") //title verification for home page 
    cy.go(1)
    cy.title().should('eq',"nopCommerce demo store. Register") //title verification for registration page 
 
    
})

})