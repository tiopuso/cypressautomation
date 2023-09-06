/// <reference types="Cypress" />

//import methods
import homePage from "../../support/SauceDemo/Methods/homePage"
import productsPage from "../../support/SauceDemo/Methods/productsPage"
import cartPage from "../../support/SauceDemo/Methods/cartPage"
import infoPage from "../../support/SauceDemo/Methods/infoPage"
import inventoryPage from "../../support/SauceDemo/Methods/inventoryPage"

const home = new homePage();
const products = new productsPage();
const cart = new cartPage();
const info = new infoPage();
const inventory = new inventoryPage();

describe('User Checkouts Product Successfully', () => 
{
    it('Visit Saucedemosite', () =>
    {
        home.navigateURL();
    })

    it('Login as Standard User', () =>
    {
        home.loginStandardUser();
        home.clickLogin();
    })

    it('Sort Product', () =>
    {
        products.sortProduct();
    })

    it('Verify Product', () =>
    {
        products.verifyItem();
    })

    it('Add To Cart Product', () =>
    {
        products.addToCart();
        products.checkItemInCart();
    })

    it('Verify Item in Cart', () =>
    {
        cart.verifyItemInCart();
    })

    it('Click Checkout', () =>
    {
        cart.clickCheckOut();
    })

    it('Input User Info', () =>
    {
        info.inputUserInfo();
        info.clickCheckOut();
    })

    it('Finish Checkout', () =>
    {
        info.finishCheckOut();
        
    })

    it('Click Checkout', () =>
    {
        info.verifySuccess();
    })

    it('User Resets App State', () =>
    {
        products.resetAppState()
    })

})

describe('User Checkouts a Product Unsuccessfully', () => 
{
    it('Visit Saucedemosite', () =>
    {
        home.navigateURL();
    })

    it('Login as Problem User', () =>
    {
        home.loginIncorrectUser();
        home.clickLogin();
    })

    it('Sort Product', () =>
    {
        products.unsortProduct();
    })

    it('Verify Product', () =>
    {
        products.verifyMismatchItem();
    })

    it('Add To Cart Product', () =>
    {
        products.addToCartNegative1();
        products.checkItemInCart();
    })

    it('Verify Item in Cart', () =>
    {
        cart.verifyMismatchItemInCart();
    })

    it('Click Checkout', () =>
    {
        cart.clickCheckOut();
    })

    it('Input User Info', () =>
    {
        info.inputUserInfo();
        info.clickCheckOut();
        info.CheckOutError();
    })

    it('User Resets App State', () =>
    {
        products.resetAppState()
    })

})

describe('User Add to Cart a Product and Unsuccessfully Remove Product in Product Page', () => 
{
    it('Visit Saucedemosite', () =>
    {
        home.navigateURL();
    })

    it('Login as Problem User', () =>
    {
        home.loginIncorrectUser();
        home.clickLogin();
    })

    it('Verify Product', () =>
    {
        products.verifyMismatchItem();
    })

    it('Add To Cart Product', () =>
    {
        products.addToCartNegative2();
    })

    it('Click Remove Product', () =>
    {
        products.removeToCart();
    })

    it('User Resets App State', () =>
    {
        products.resetAppState()
    })

})


describe('User Add to Cart Multiple Products and Unsuccessfully Remove Product in Product Page', () => 
{
    it('Visit Saucedemosite', () =>
    {
        home.navigateURL();
    })

    it('Login as Problem User', () =>
    {
        home.loginIncorrectUser();
        home.clickLogin();
    })

    it('Verify Product', () =>
    {
        products.verifyMismatchItem();
    })

    it('Add To Cart Multiple Products', () =>
    {
        products.addToCartNegative3();
    })

    it('Click Remove Product', () =>
    {
        products.removeToCart2();
    })

    it('User Resets App State', () =>
    {
        products.resetAppState()
    })

})

describe('User Checks the Product Details Page', () => 
{
    it('Visit Saucedemosite', () =>
    {
        home.navigateURL();
    })

    it('Login as Problem User', () =>
    {
        home.loginIncorrectUser();
        home.clickLogin();
    })

    it('Verify Product', () =>
    {
        products.verifyMismatchItem();
    })

    it('Click Product', () =>
    {
        products.clickItem();
    })

    it('Verify Product in Product Detailed Page', () =>
    {
        inventory.verifyPDP();
    })

    it('User Resets App State', () =>
    {
        products.resetAppState()
    })

}) 

describe('Locked Out User Test', () => 
{
    it('Visit Saucedemosite', () =>
    {
        home.navigateURL();
    })

    it('Login as Locked Out User', () =>
    {
        home.loginLockOutUser();
        home.clickLogin();
    })

    it('Verify Login Error', () =>
    {
        home.verifyErrorLockOutUser();
    })

})