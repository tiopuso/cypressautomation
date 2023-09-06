//import the locator
const SauceInfoPageLocator = require ("../../SauceDemo/Locators/info.json");

//import fixture
const Testdata = require ("../../../fixtures/sauceDemo/saucedemoFixture.json");

//create class
class InfoPage{
    //create method
   inputUserInfo(){
        cy.get(SauceInfoPageLocator.firstName).type(Testdata.firstName), 
        cy.get(SauceInfoPageLocator.lastName).type(Testdata.lastName), 
        cy.get(SauceInfoPageLocator.zip).type(Testdata.zip);
    }

    clickCheckOut(){
        cy.get(SauceInfoPageLocator.checkOut).click({force:true});
    }

    finishCheckOut(){
        cy.get(SauceInfoPageLocator.finish).click({force:true});
    }

    verifySuccess(){
        cy.get(SauceInfoPageLocator.checkOutSuccess).should('contain.text',Testdata.checkOutSuccess),
        cy.get(SauceInfoPageLocator.backHome).click({force:true});
    }

    CheckOutError(){
        cy.get(SauceInfoPageLocator.checkOutError).should('contain.text',Testdata.checkOutError);
    }

}

//export class
export default InfoPage;