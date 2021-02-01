import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I am at login page',()=>{
    cy.visit("https://www.saucedemo.com/", { timeout: 10000 });
    cy.url().should("contain", "saucedemo");
    cy.title().should('eq','Swag Labs')
    cy.window().then((win) => {
      win.sessionStorage.clear();
    });

})

When("I input username and password", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get("#user-name").clear().type(element.username);
    cy.get("#password").clear().type(element.password);
  });
});
  

When('I click the button',()=>{
    cy.get('input[type="submit"]').should("be.visible").click();

})

Then('{string} should be shown',(content)=>{

    cy.contains(content,{timeout:8000}).should('be.visible')

})
