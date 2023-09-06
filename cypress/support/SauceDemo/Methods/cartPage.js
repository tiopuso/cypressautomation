//import the locator
const SauceCartPageLocator = require ("../../SauceDemo/Locators/cart.json");

//import fixture
const Testdata = require ("../../../fixtures/sauceDemo/saucedemoFixture.json");

//create class
class CartPage{
    //create method
    verifyItemInCart(){
        cy.get(SauceCartPageLocator.item1).should('contain.text',Testdata.item1), 
        cy.get(SauceCartPageLocator.price).should('contain.text',Testdata.price), 
        cy.get(SauceCartPageLocator.removeItem).should('be.visible'),
        cy.get(SauceCartPageLocator.continueShoping).should('be.visible'),
        cy.get(SauceCartPageLocator.checkOut).should('be.visible');
    }

    verifyMismatchItemInCart(){
        cy.get(SauceCartPageLocator.item1).should('not.contain.text',Testdata.item1), 
        cy.get(SauceCartPageLocator.price).should('not.contain.text',Testdata.price), 
        cy.get(SauceCartPageLocator.removeItem2).should('be.visible'),
        cy.get(SauceCartPageLocator.continueShoping2).should('be.visible'),
        cy.get(SauceCartPageLocator.checkOut).should('be.visible');
    }

    clickCheckOut(){
        cy.get(SauceCartPageLocator.checkOut).click({force:true});
    }
}

//export class
export default CartPage;