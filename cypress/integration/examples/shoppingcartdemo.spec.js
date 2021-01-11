/// <reference types = "cypress"/>
describe('ShoppingCartDemo',function()
{

it('verifyCartAmountDemo',function()
{
    cy.visit('https://demo.nopcommerce.com/') //open url
    cy.title().should('eq',"nopCommerce demo store") //title verification
    cy.get('#small-searchterms').type("Apple MacBook Pro 13-inch") //typing product name in search box 
    cy.get('input[value=Search]').click() //clicking Search button
    cy.get('.product-box-add-to-cart-button').click() //Clicking add to cart 
    cy.wait(5000)
    cy.get('#product_enteredQuantity_4').clear().type('4') // entering 4 as item quantity
    cy.get('#add-to-cart-button-4').click() //clicking on add to kart 
    cy.wait(5000)
    cy.get('.cart-label').click() //clicking on shpping cart link
    cy.wait(5000)
    cy.get('.product-subtotal').contains ('$7,200.00')// verifying amount as per 4 qty 
    
})

})