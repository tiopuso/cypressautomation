//import the locator
const SauceHomePageLocator = require ("../../SauceDemo/Locators/home.json");
//import fixture
const Testdata = require ("../../../fixtures/sauceDemo/saucedemoFixture.json");

class SauceHomePage {
//create class
  navigateURL()
  {
    return cy.log('Before Each'), cy.visit(SauceHomePageLocator.home);
  }

  loginStandardUser() 
  {
    return cy.get(SauceHomePageLocator.userName).type(Testdata.userName1),
    cy.get(SauceHomePageLocator.passWord).type(Testdata.passWord1);

  }

  loginIncorrectUser() 
  {
    return cy.get(SauceHomePageLocator.userName).type(Testdata.userName2),
    cy.get(SauceHomePageLocator.passWord).type(Testdata.passWord1);
    
  }

  loginLockOutUser() 
  {
    return cy.get(SauceHomePageLocator.userName).type(Testdata.userName3),
    cy.get(SauceHomePageLocator.passWord).type(Testdata.passWord1);
    
  }
  clickLogin() 
  {
    cy.get(SauceHomePageLocator.login).click();
  }

  verifyErrorIncorrectUser()
  {
    cy.get(SauceHomePageLocator.loginError).should('contains.text','Epic sadface: Username and password do not match any user in this service');
  }

  verifyErrorLockOutUser()
  {
    cy.get(SauceHomePageLocator.loginError).should('contains.text','Epic sadface: Sorry, this user has been locked out.');
  }

  removeCookies()
  {
    cy.clearAllCookies(5);
  }

}

export default SauceHomePage;
