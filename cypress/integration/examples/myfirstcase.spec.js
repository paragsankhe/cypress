
describe('Test suite',function()
{

it('test case1',function()
{
    cy.visit('https://www.google.com')
    cy.title().should('eq',"Google")
})

})