//import the locator
const SauceProductsPageLocator = require ("../Locators/products.json");

//import fixture
const Testdata = require ("../../../fixtures/sauceDemo/saucedemoFixture.json");

//create class
class ProductsPage{
    //create method
    sortProduct()
    {
        return cy.get(SauceProductsPageLocator.sort).should('be.visible'), cy.get(SauceProductsPageLocator.sort).select(SauceProductsPageLocator.hilo);
    }

    unsortProduct()
    {
        return cy.get(SauceProductsPageLocator.sort).should('be.visible'), cy.get(SauceProductsPageLocator.sort).select(SauceProductsPageLocator.hilo),
        cy.get(SauceProductsPageLocator.sort).should('not.equal',Testdata.hilo);
    }

    verifyItem()
    {
        cy.get(SauceProductsPageLocator.item1).should('contain.text',Testdata.item1), 
        cy.get(SauceProductsPageLocator.price).should('contain.text',Testdata.price);
    }

    verifyMismatchItem()
    {
        cy.get(SauceProductsPageLocator.item1).should('not.contain.text',Testdata.item2), 
        cy.get(SauceProductsPageLocator.price).should('not.contain.text',Testdata.price);
    }

    clickItem()
    {
        cy.get(SauceProductsPageLocator.item2).should('contain.text',Testdata.item2), 
        cy.get(SauceProductsPageLocator.price).should('contain.text',Testdata.price2), 
        cy.get(SauceProductsPageLocator.item2).click({force:true});
    }

    verifyPDP()
    {
        cy.get(SauceProductsPageLocator.item2).should('not.contain.text',Testdata.item2), 
        cy.get(SauceProductsPageLocator.price).should('not.contain.text',Testdata.price2);
    }

    addToCart()
    {
        cy.get(SauceProductsPageLocator.addToCart).click({force:true}),
        cy.get(SauceProductsPageLocator.itemAdded).should('be.visible');
    }

    addToCartNegative1()
    {
        cy.get(SauceProductsPageLocator.addToCartNegative).click({force:true}),
        cy.get(SauceProductsPageLocator.itemAdded).should('be.visible');
    }

    addToCartNegative2()
    {
        cy.get(SauceProductsPageLocator.addToCartNegative).click({force:false}),
        cy.get(SauceProductsPageLocator.itemAdded).should('be.visible');
    }

    addToCartNegative3()
    {
        cy.get(SauceProductsPageLocator.addToCartNegative).click({force:false}),
        cy.get(SauceProductsPageLocator.addToCartNegative2).click({force:false});
    }

    removeToCart()
    {
        cy.get(SauceProductsPageLocator.removeToCart1).click(),
        cy.get(SauceProductsPageLocator.addToCartNegative).should('not.be.true');
        cy.get(SauceProductsPageLocator.itemAdded).should('have.length.of.at.most', 1);
    }

    removeToCart2()
    {
        cy.get(SauceProductsPageLocator.removeToCart1).click(), cy.get(SauceProductsPageLocator.addToCartNegative).should('not.be.true'),
        cy.get(SauceProductsPageLocator.removeToCart2).click(), cy.get(SauceProductsPageLocator.addToCartNegative2).should('not.be.true'),
        cy.get(SauceProductsPageLocator.itemAdded).should('have.length.of.at.most', 2);
    }

    checkItemInCart()
    {
        cy.get(SauceProductsPageLocator.cartIcon).click();
    }

    resetAppState()
    {
        cy.get(SauceProductsPageLocator.hamburgerIcon).click(), cy.get(SauceProductsPageLocator.resetAppState).click(),
        cy.reload();
    }
}

//export class
export default ProductsPage;