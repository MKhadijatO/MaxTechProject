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
    cy.get("li[id='menu-item-17651'] a").click();
    cy.url().should("include", "https://www.mtechitng.com/blog/");
});

Then ("I click on Learn and validate page open", function () {
    cy.get("li[id='menu-item-22011'] a[target='_blank']").click();
    cy.url().should("include", "https://www.learn.mtechitng.com/");
});

Then ("I click on Services and validate page open", function () {
    cy.get("li[id='menu-item-17634'] a").click();
    cy.url().should("include", "https://www.mtechitng.com/our-services/").should("contain.text", "HOME / SERVICES");
});

Then ("I click on Get A Quote and validate page open", function () {
    cy.get("a[class='sf-with-ul']").click();
    cy.get("li[id='menu-item-22168'] a").click();
    cy.url().should("include", "https://www.mtechitng.com/device-repair-form/");
});

Then ("I click on Web development and validate page open", function () {
    cy.get("li[id='menu-item-21443'] span").click();
    cy.url().should("include", "https://web.mtechitng.com/");
});

When ("I validate Close button and then click on the icon", function () {
    cy.get("li[id='menu-item-20623'] span").click();
    cy.url().should("include", "https://store.mtechitng.com/");
});