/// <reference types = "cypress"/>
describe('UI element handling',function()
{

it('verify input box and radio buttons ',function()
{
    cy.visit('http://demo.guru99.com/test/newtours/#') //open url
    cy.title().should('eq',"Welcome: Mercury Tours") //title verification
    cy.url().should('include', 'newtours') // verify url include new tours 
    cy.get('input[name=userName]').should('be.visible').should('be.enabled').type('mercury') // verifying username field and passing value 
    cy.get('input[name=password]').should('be.visible').should('be.enabled').type('mercury') //verifying password field and passing value 
    cy.get('input[name=submit]').should('be.visible').click() //login click 
    cy.get('a[href=reservation.php]').click() //clicking on flight 
    cy.get('input[value=roundtrip]').should('be.visible').should('be.checked') //checking first radio btn if its already checked 
    cy.get('input[value=oneway]').should('be.visible').should('not.be.checked').click() //checking second radio btn if its not checked and then click 
    


})

})