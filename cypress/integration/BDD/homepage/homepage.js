/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given ("I open the MaxTech website", function () {
    cy.visit("https://www.mtechitng.com/");
})

When ("I validate the MaxTech logo)", function () {
    cy.get("logo_image ls-is-cached lazyloaded").should("exists")
}) 

Then ("I validate the navbar", function () {
    cy.get(".sc_layouts_column.sc_layouts_column_align_right.sc_layouts_column_icons_position_left.sc_layouts_column_fluid.column-3_4").should("exists")
});

Then ("I click on Blog and validate page open", function () {
    cy.get("").should("");
});

Then ("I click on Learn and validate page open", function () {

});

Then ("I click on Services and validate page open", function () {

});

Then ("I click on Get A Quote and validate page open", function () {

});

Then ("I click on Web development and validate page open", function () {

});

When ("I validate Close button and then click on the icon", function () {
    
});