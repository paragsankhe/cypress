/// <reference types = "cypress"/>
describe('MyTestSuite',function()
{

    before(function(){

cy.fixture('example.json').then(function(data){

this.data = data
})

    })

it('verify login with fixtures demo ',function()
{
    cy.visit('https://admin-demo.nopcommerce.com') //open url
    cy.get('#Email').clear().type(this.data.email) //typing username
    cy.get('#Password').clear().type(this.data.password) //typing passwrd
    cy.get('.button-1').click() //login btn click
    cy.title().should('eq','Dashboard / nopCommerce administration')


})

})