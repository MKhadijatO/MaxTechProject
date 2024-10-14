Feature: MaxTech End-to-end Test
 Application regression

@regression

Scenario: Validate Homepage screen
    Given I open the MaxTech website
    When I validate the MaxTech logo
    Then I validate the navbar

Scenario: Validate Menu Buttons
    Given I open the MaxTech website
    Then I click on Blog and validate page open
    Then I click on Learn and validate page open
    Then I click on Services and validate page open
    Then I click on Get A Quote and validate page open
    Then I click on Web development and validate page open
    When I validate Close button and then click on the icon

Scenario: Validate About us Button
    Given I open the MaxTech website
    Then I click and validate the About us button

Scenario: Validate Device Repair Button
    Given I open the MaxTech website
    Then I click and validate the Device Repair button

Scenario: Validate Data Recovery Button
    Given I open the MaxTech website
    Then I click and validate the Data Recovery button

Scenario: Validate Pricing Button
    Given I open the MaxTech website
    Then I click and validate the Validate Pricing button

Scenario: Validate Read the Articles Section
    Given I open the MaxTech website
    Then I validate the Articles Section

Scenario: Validate Get In Touch Form
    Given I open the MaxTech website
    Then I click and validate the Get In Touch

Scenario: Validate Footer
    Given I open the MaxTech website
    Then I validate Footer