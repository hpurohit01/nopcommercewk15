$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefiles/computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Test",
  "description": "\r\nAs a user I want to navigate to computer page and its all related products page on nopcommerce website",
  "id": "computer-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19301248500,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User should able to arrange products in \"Name: Z to A\" alphabetical order",
  "description": "",
  "id": "computer-test;user-should-able-to-arrange-products-in-\"name:-z-to-a\"-alphabetical-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@Smoke"
    },
    {
      "line": 34,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I mouse hover on computer top tab",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I mouse hover and click on \"Desktops\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I select sort by position \"Name: Z to A\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I should be able to verify the product arranged in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 194624900,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 860844600,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/registration.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Test",
  "description": "\r\nAs a user I want to register my account on nopcommerce website",
  "id": "registration-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4494936800,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to register page successfully",
  "description": "",
  "id": "registration-test;user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should be able to navigate to the registration page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I should be able to see \"Register\" page title",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 42400,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1405447600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iShouldBeAbleToNavigateToTheRegistrationPage()"
});
formatter.result({
  "duration": 33800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.iShouldBeAbleToSeePageTitle(String)"
});
formatter.result({
  "duration": 80436900,
  "status": "passed"
});
formatter.after({
  "duration": 846904600,
  "status": "passed"
});
formatter.before({
  "duration": 4891503700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User should able to register with valid inputs to all mandatory field",
  "description": "",
  "id": "registration-test;user-should-able-to-register-with-valid-inputs-to-all-mandatory-field",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I enter first name \"Hemal\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter last name \"Purohit\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter email \"xyz@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter password \"abc1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter confirm password \"abc1234\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should be able to register",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "I should be able to see \"Your registration completed\" message",
  "keyword": "And "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45800,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1649171900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hemal",
      "offset": 20
    }
  ],
  "location": "RegistrationSteps.iEnterFirstName(String)"
});
formatter.result({
  "duration": 1147718300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Purohit",
      "offset": 19
    }
  ],
  "location": "RegistrationSteps.iEnterLastName(String)"
});
formatter.result({
  "duration": 1267272600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz@gmail.com",
      "offset": 15
    }
  ],
  "location": "RegistrationSteps.iEnterEmail(String)"
});
formatter.result({
  "duration": 1181687300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 18
    }
  ],
  "location": "RegistrationSteps.iEnterPassword(String)"
});
formatter.result({
  "duration": 1144449500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc1234",
      "offset": 26
    }
  ],
  "location": "RegistrationSteps.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 1135460500,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 146736600,
  "status": "passed"
});
formatter.match({
  "location": "RegistrationSteps.iShouldBeAbleToRegister()"
});
formatter.result({
  "duration": 36000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 25
    }
  ],
  "location": "RegistrationSteps.iShouldBeAbleToSeeMessage(String)"
});
formatter.result({
  "duration": 40166063800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(text(),\u0027Your registration completed\u0027)]\"}\n  (Session info: chrome\u003d96.0.4664.93)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [c3a1e400d740c286cbb247d0e2ce68e2, findElement {using\u003dxpath, value\u003d//div[contains(text(),\u0027Your registration completed\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\HEMALP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:59813}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:59813/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: c3a1e400d740c286cbb247d0e2ce68e2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy22.getText(Unknown Source)\r\n\tat com.demo.nopcommerce.pages.RegisterPage.getRegistrationCompleteText(RegisterPage.java:93)\r\n\tat com.demo.nopcommerce.cucumber.steps.RegistrationSteps.iShouldBeAbleToSeeMessage(RegistrationSteps.java:73)\r\n\tat ✽.And I should be able to see \"Your registration completed\" message(src/test/java/resources/featurefiles/registration.feature:23)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1362216700,
  "status": "passed"
});
formatter.uri("src/test/java/resources/featurefiles/topmenu.feature");
formatter.feature({
  "line": 1,
  "name": "Top Menu Test",
  "description": "\r\nAs a user I want to click on top menu tabs and verify page navigation on nopcommerce website",
  "id": "top-menu-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "User should be able to click top menu tab and navigate to \"\u003ctopMenuTab\u003e\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"\u003ctopMenuTab\u003e\" from top tabs",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"\u003ctopMenuTab\u003e\" and verify the page title",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;",
  "rows": [
    {
      "cells": [
        "topMenuTab"
      ],
      "line": 15,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;1"
    },
    {
      "cells": [
        "Computers"
      ],
      "line": 16,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;2"
    },
    {
      "cells": [
        "Electronics"
      ],
      "line": 17,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;3"
    },
    {
      "cells": [
        "Apparel"
      ],
      "line": 18,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;4"
    },
    {
      "cells": [
        "Digital downloads"
      ],
      "line": 19,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;5"
    },
    {
      "cells": [
        "Books"
      ],
      "line": 20,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;6"
    },
    {
      "cells": [
        "Jewelry"
      ],
      "line": 21,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;7"
    },
    {
      "cells": [
        "Gift Cards"
      ],
      "line": 22,
      "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 25300772300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should be able to click top menu tab and navigate to \"Computers\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Computers\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Computers\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 37500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2762547100,
  "status": "passed"
});
formatter.before({
  "duration": 24964407400,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User should be able to click top menu tab and navigate to \"Electronics\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Electronics\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Electronics\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 26200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 729423100,
  "status": "passed"
});
formatter.before({
  "duration": 24206883600,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User should be able to click top menu tab and navigate to \"Apparel\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Apparel\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Apparel\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1862861000,
  "status": "passed"
});
formatter.before({
  "duration": 21412735400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User should be able to click top menu tab and navigate to \"Digital downloads\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Digital downloads\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Digital downloads\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 34200,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1209531100,
  "status": "passed"
});
formatter.before({
  "duration": 27107919100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to click top menu tab and navigate to \"Books\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Books\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Books\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 25100,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1093662200,
  "status": "passed"
});
formatter.before({
  "duration": 22144359100,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to click top menu tab and navigate to \"Jewelry\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Jewelry\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Jewelry\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 48000,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 1012143400,
  "status": "passed"
});
formatter.before({
  "duration": 20839227300,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Could not start a new session. Response code 500. Message: unknown error: Chrome failed to start: exited normally.\n  (chrome not reachable)\n  (The process started from chrome location C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, newSession {capabilities\u003d[Capabilities {browserName: chrome, goog:chromeOptions: {args: [], extensions: []}}], desiredCapabilities\u003dCapabilities {browserName: chrome, goog:chromeOptions: {args: [], extensions: []}}}]\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:84)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:62)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:156)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:168)\r\n\tat org.openqa.selenium.chromium.ChromiumDriver.\u003cinit\u003e(ChromiumDriver.java:108)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:104)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:91)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:46)\r\n\tat com.demo.nopcommerce.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:30)\r\n\tat com.demo.nopcommerce.cucumber.Hooks.setUP(Hooks.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to click top menu tab and navigate to \"Gift Cards\" page successfully",
  "description": "",
  "id": "top-menu-test;user-should-be-able-to-click-top-menu-tab-and-navigate-to-\"\u003ctopmenutab\u003e\"-page-successfully;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I click on \"Gift Cards\" from top tabs",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I should be able to navigate to the \"Gift Cards\" and verify the page title",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "RegistrationSteps.iAmOnHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 875500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HEMAL\u0027, ip: \u0027192.168.0.41\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [null, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.93, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\HEMALP~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:60074}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60074/devtoo..., se:cdpVersion: 96.0.4664.93, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:145)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.demo.nopcommerce.uitility.Utility.getScreenshot(Utility.java:333)\r\n\tat com.demo.nopcommerce.cucumber.Hooks.tearDown(Hooks.java:23)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});