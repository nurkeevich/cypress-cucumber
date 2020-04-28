import { Given } from "cypress-cucumber-preprocessor/steps";

Given("Test me", () => {
    cy.visit("https://google.com");
});
