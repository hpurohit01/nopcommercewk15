Feature: Computer Test

  As a user I want to navigate to computer page and its all related products page on nopcommerce website
@Sanity @Regression
  Scenario: User should be able to navigate to computer page successfully
    Given I am on homepage
    When I click on computers tab
    Then I should be able to navigate to computers page successfully
    And I should able to see "Computers" as title on computers page
@Sanity@Regression
  Scenario: User should be able to  navigate to desktop page successfully
    Given I am on homepage
    When I mouse hover on computers tab
    And I mouse hover and click on "Desktops" from computers drop down menu
    Then I should be able to navigate to Desktops page successfully
    And I should be able to see "Desktops" as title on Desktops page
@Sanity@Regression
  Scenario: User should be able to  navigate to Notebooks page successfully
    Given I am on homepage
    When I mouse hover on computers tab
    And I mouse hover and click on "Notebooks" from computers drop down menu
    Then I should be able to navigate to Notebooks page successfully
    And I should be able to see "Notebooks" as title on Notebooks page

@Sanity@Regression
  Scenario: User should be able to  navigate to Software page successfully
    Given I am on homepage
    When I mouse hover on computers tab
    And I mouse hover and click on "Software" from computers drop down menu
    Then I should be able to navigate to Software page successfully
    And I should be able to see "Software" as title on Software page



  @Smoke@Regression
  Scenario: User should able to arrange products in "Name: Z to A" alphabetical order
    Given I am on homepage
    When I mouse hover on computer top tab
    And I mouse hover and click on "Desktops"
    And I select sort by position "Name: Z to A"
    Then I should be able to verify the product arranged in descending order

  @Sanity@Regression
  Scenario: User should able to arrange products in "Name: A to Z" alphabetical order
    Given I am on homepage
    When I mouse hover on computer top tab
    And I mouse hover and click on "Desktops"
    And I select sort by position "Name: A to Z"
    And I add build your own computer to cart
    Then I should be able to verify "Build your own computer" page title text
    When I select processor "2.2 GHz Intel Pentium Dual-Core E2200"
    And I select RAM "8GB [+$60.00]"
    And I click radio button to select HDD
    And I click radio button to select OS
    And I click check box to select Software
    Then I should be able to verify total price of "$1,470.00"
    And I should be able to add the computer product to cart
    And I should be able to see green bar message "The product has been added to your shopping cart"

