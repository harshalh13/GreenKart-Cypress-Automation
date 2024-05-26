//cypress - Spec
describe('my first test suite', function()  
{ 
    it('My first test case', function()
{
//test step
cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/"); 
cy.get('.search-keyword').type('ca')
cy.get('.search-button').click();
cy.get('.products').as('productlocator');
cy.get('@productlocator').find('.product').each(($el,index,$list)=>{
    const textveg = $el.find('h4.product-name').text();
    if(textveg.includes('Cashews'))
        {
        $el.find('button').click()
        }
})
cy.get('.cart-icon > img').click()
cy.contains('PROCEED TO CHECKOUT').click();
cy.get('button').contains('Place Order').click();
cy.get('Select').contains('India').click({force: true});
cy.get('.chkAgree').check().should('be.checked');
cy.contains('Proceed').click();

} ) 




} )