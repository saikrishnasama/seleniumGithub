$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Feature/myAccount_login.Feature");
formatter.feature({
  "line": 1,
  "name": "myAccount-Login Feature",
  "description": "",
  "id": "myaccount-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 2,
      "value": "#Description:  This feature will test a login functionality"
    },
    {
      "line": 4,
      "value": "#Scenario: Login with valid username and password"
    },
    {
      "line": 5,
      "value": "#Given  open browser"
    },
    {
      "line": 6,
      "value": "#When Enter the url \"https://www.flipkart.com/\""
    },
    {
      "line": 7,
      "value": "#And click on my Account Login"
    },
    {
      "line": 8,
      "value": "#And enter registered username and password"
    },
    {
      "line": 9,
      "value": "#And click on login button"
    },
    {
      "line": 10,
      "value": "#Then user must be successfully login to the webpage"
    },
    {
      "line": 13,
      "value": "#"
    },
    {
      "line": 15,
      "value": "#Scenario: Login with valid username and password"
    },
    {
      "line": 16,
      "value": "#Given  open browser"
    },
    {
      "line": 17,
      "value": "#When Enter the url \"https://www.flipkart.com/\""
    },
    {
      "line": 18,
      "value": "#And click on my Account Login"
    },
    {
      "line": 19,
      "value": "#And enter registered username \"naveenkumar.vavilathota@gmail.com\" and password \"n9494626227\""
    },
    {
      "line": 20,
      "value": "#And click on login button"
    },
    {
      "line": 21,
      "value": "#Then user must be successfully login to the webpage"
    },
    {
      "line": 24,
      "value": "#Scenario Outline: Login with valid username and password"
    },
    {
      "line": 25,
      "value": "#Given  open browser"
    },
    {
      "line": 26,
      "value": "#When Enter the url \"https://www.flipkart.com/\""
    },
    {
      "line": 27,
      "value": "#And click on my Account Login"
    },
    {
      "line": 28,
      "value": "#And enter registered username \"\u003cusername\u003e\" and password \"\u003cusername\u003e\""
    },
    {
      "line": 29,
      "value": "#And click on login button"
    },
    {
      "line": 30,
      "value": "#Then user must be successfully login to the webpage"
    },
    {
      "line": 32,
      "value": "#Examples:"
    },
    {
      "line": 33,
      "value": "#|username|password|"
    },
    {
      "line": 34,
      "value": "#|naveenkumar.vavilathota@gmail.com|n9494626227|"
    },
    {
      "line": 35,
      "value": "#|naveenkumar.vavilathota@gmail.com|n994949|"
    },
    {
      "line": 36,
      "value": "#|naveen|n364774|"
    },
    {
      "line": 39,
      "value": "#Simple login with Data table forms"
    },
    {
      "line": 40,
      "value": "#Scenario: Login with valid username and password"
    },
    {
      "line": 41,
      "value": "#Given  open browser"
    },
    {
      "line": 42,
      "value": "#When Enter the url \"https://www.flipkart.com/\""
    },
    {
      "line": 43,
      "value": "#And click on my Account Login"
    },
    {
      "line": 44,
      "value": "#And enter registered username and password"
    },
    {
      "line": 45,
      "value": "#|naveenkumar.vavilathota@gmail.com| n9494626227 |"
    },
    {
      "line": 46,
      "value": "#And click on login button"
    },
    {
      "line": 47,
      "value": "#Then user must be successfully login to the webpage"
    },
    {
      "line": 50,
      "value": "#Simple login with Data table forms with header"
    }
  ],
  "line": 51,
  "name": "Login with valid username and password",
  "description": "",
  "id": "myaccount-login-feature;login-with-valid-username-and-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "open browser",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "Enter the url \"https://www.flipkart.com/\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 54,
      "value": "#And click on my Account Login"
    }
  ],
  "line": 55,
  "name": "enter registered username and password",
  "rows": [
    {
      "cells": [
        "user",
        "password"
      ],
      "line": 56
    },
    {
      "cells": [
        "naveenkumar.vavilathota@gmail.com",
        "n9494626227"
      ],
      "line": 57
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "user must be successfully login to the webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "My_account_Loginpage.open_browser()"
});
formatter.result({
  "duration": 6428964400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.flipkart.com/",
      "offset": 15
    }
  ],
  "location": "My_account_Loginpage.enter_the_url(String)"
});
formatter.result({
  "duration": 7244822600,
  "status": "passed"
});
formatter.match({
  "location": "My_account_Loginpage.enter_registered_username_and_password(DataTable)"
});
formatter.result({
  "duration": 6260477000,
  "status": "passed"
});
formatter.match({
  "location": "My_account_Loginpage.click_on_login_button()"
});
formatter.result({
  "duration": 71271500,
  "status": "passed"
});
formatter.match({
  "location": "My_account_Loginpage.user_must_be_successfully_login_to_the_webpage()"
});
formatter.result({
  "duration": 241988900,
  "status": "passed"
});
});