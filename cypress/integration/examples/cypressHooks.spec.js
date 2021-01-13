/// <reference types = "cypress"/>
describe('Cypress hooks',function()
{


    before(function() {
        // runs once before all tests in the block
        cy.log('*********loading all configurations**************')
      })
    
      beforeEach(function()  {
        // runs before each test in the block
        cy.log('*********Login of user**************')
      })
    
      afterEach(function() {
        // runs after each test in the block
        cy.log('*********Logout of user**************')
      })
    
      after(function() {
        // runs once after all tests in the block
        cy.log('*********Removing all configuration//teardown //reporting**************')
      })

it('Search product test case ',function()
{
  cy.log('Searching product')
})

it('Remove prodct test case ',function()
{
    cy.log('Removing product')
})

it('giving feedback test case ',function()
{
    cy.log('Giving feedback of product')
})

})