package com.demo.nopcommerce.cucumber.step;

import com.demo.nopcommerce.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {

    @When("^I click on computers tab$")
    public void iClickOnComputersTab() throws InterruptedException {
        Thread.sleep(1000);
        new HomePage().clickOnComputerTab();
    }

    @Then("^I should be able to navigate to computers page successfully$")
    public void iShouldBeAbleToNavigateToComputersPageSuccessfully() {
    }

    @And("^I should able to see \"([^\"]*)\" as title on computers page$")
    public void iShouldAbleToSeeAsTitleOnComputersPage(String expectedPageTitle) {
        Assert.assertEquals(expectedPageTitle,new ComputerPage().getComputerNavigationText());
    }


    @When("^I mouse hover on computers tab$")
    public void iMouseHoverOnComputersTab() {
        new HomePage().mouseHoverOnComputerTab();
    }

    @And("^I mouse hover and click on \"([^\"]*)\" from computers drop down menu$")
    public void iMouseHoverAndClickOnFromComputersDropDownMenu(String productName) throws InterruptedException {
        new HomePage().selectFromComputerSubMenu(productName);
    }

    @Then("^I should be able to navigate to Desktops page successfully$")
    public void iShouldBeAbleToNavigateToDesktopsPageSuccessfully() {

    }

    @And("^I should be able to see \"([^\"]*)\" as title on Desktops page$")
    public void iShouldBeAbleToSeeAsTitleOnDesktopsPage(String expectedPageTitle)  {
        Assert.assertEquals(expectedPageTitle,new DesktopPage().getDesktopPageNavigationText());
    }

    @Then("^I should be able to navigate to Notebooks page successfully$")
    public void iShouldBeAbleToNavigateToNotebooksPageSuccessfully() {
    }

    @And("^I should be able to see \"([^\"]*)\" as title on Notebooks page$")
    public void iShouldBeAbleToSeeAsTitleOnNotebooksPage(String expectedPageTitle) {
        Assert.assertEquals(expectedPageTitle,new NotebooksPage().getNotebooksPageNavigationText());
    }

    @Then("^I should be able to navigate to Software page successfully$")
    public void iShouldBeAbleToNavigateToSoftwarePageSuccessfully() {
    }

    @And("^I should be able to see \"([^\"]*)\" as title on Software page$")
    public void iShouldBeAbleToSeeAsTitleOnSoftwarePage(String expectedPageTitle) {
        Assert.assertEquals(expectedPageTitle,new SoftwarePage().getSoftwarePageNavigationText());
    }

    @When("^I mouse hover on computer top tab$")
    public void iMouseHoverOnComputerTopTab() {
    }

    @And("^I select sort by position \"([^\"]*)\"$")
    public void iSelectSortByPosition(String sortBy) throws InterruptedException {
        Thread.sleep(1000);

    }

    @Then("^I should be able to verify the product arranged in descending order$")
    public void iShouldBeAbleToVerifyTheProductArrangedInDescendingOrder() {
    }

    @And("^I add build your own computer to cart$")
    public void iAddBuildYourOwnComputerToCart() {
    }

    @Then("^I should be able to verify \"([^\"]*)\" page title text$")
    public void iShouldBeAbleToVerifyPageTitleText(String expectedPageTitle) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedPageTitle,new BuildYourOwnComputerPage().actualBuildYourOwnComputerText());
    }

    @When("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processorName) throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().selectIntelPentiumProcessor(processorName);
    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram) throws InterruptedException{
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().select8BGRAM(ram);

    }

    @And("^I click radio button to select HDD$")
    public void iClickRadioButtonToSelectHDD() throws InterruptedException{
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().clickOn400GBRadioButton();
    }

    @And("^I click radio button to select OS$")
    public void iClickRadioButtonToSelectOS()throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().clickOnVistaPremiumRadioButton();
    }

    @And("^I click check box to select Software$")
    public void iClickCheckBoxToSelectSoftware() {
    }

    @Then("^I should be able to verify total price of \"([^\"]*)\"$")
    public void iShouldBeAbleToVerifyTotalPriceOf(String expectedTotalPrice) throws InterruptedException {
        Thread.sleep(1000);
        Assert.assertEquals(expectedTotalPrice,new BuildYourOwnComputerPage().actualTotalPrice());
    }

    @And("^I should be able to add the computer product to cart$")
    public void iShouldBeAbleToAddTheComputerProductToCart() throws InterruptedException {
        Thread.sleep(1000);
        new BuildYourOwnComputerPage().clickToAddBuildProductToCart();
    }

    @And("^I should be able to see green bar message \"([^\"]*)\"$")
    public void iShouldBeAbleToSeeGreenBarMessage(String expectedGreenBarMessage) throws InterruptedException {
        Assert.assertEquals(expectedGreenBarMessage,new BuildYourOwnComputerPage().actualTopGreenBarText());
    }

}

