describe('calender test' ,()=>
{
    it('verify date selection',() =>
    {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.get("react-date-picker__inputGroup").click();
        cy.get(".react-calendar__navigation__label").click();
        

    })



}

)