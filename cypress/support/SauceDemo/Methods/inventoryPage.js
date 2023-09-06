//import the locator
const SauceInventoryPageLocator = require ("../Locators/inventory.json");

//import fixture
const Testdata = require ("../../../fixtures/sauceDemo/saucedemoFixture.json");

//create class
class InventoryPage{
    //create method
    verifyPDP()
    {
        cy.get(SauceInventoryPageLocator.itemx).should('not.contain.text',Testdata.itemx), 
        cy.get(SauceInventoryPageLocator.pricex).should('not.contain.text',Testdata.pricex);
    }
}

//export class
export default InventoryPage;