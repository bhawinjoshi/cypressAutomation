const { Before, After } = require("cypress-cucumber-preprocessor/steps/index");

Before(() => {
    cy.log(
        "This will run once before all tests, you can use this to for example start up your server, if that's your thing"
    );
    cy.reload();

});

After(() => {
    cy.log("Logout from application");
    
});