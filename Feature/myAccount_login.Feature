Feature: myAccount-Login Feature
#Description:  This feature will test a login functionality

#Scenario: Login with valid username and password
#Given  open browser
#When Enter the url "https://www.flipkart.com/"
#And click on my Account Login
#And enter registered username and password
#And click on login button
#Then user must be successfully login to the webpage


#

#Scenario: Login with valid username and password
#Given  open browser
#When Enter the url "https://www.flipkart.com/"
#And click on my Account Login
#And enter registered username "naveenkumar.vavilathota@gmail.com" and password "n9494626227"
#And click on login button
#Then user must be successfully login to the webpage


#Scenario Outline: Login with valid username and password
#Given  open browser
#When Enter the url "https://www.flipkart.com/"
#And click on my Account Login
#And enter registered username "<username>" and password "<username>"
#And click on login button
#Then user must be successfully login to the webpage

#Examples:
#|username|password|
#|naveenkumar.vavilathota@gmail.com|n9494626227|
#|naveenkumar.vavilathota@gmail.com|n994949|
#|naveen|n364774|


#Simple login with Data table forms
#Scenario: Login with valid username and password
#Given  open browser
#When Enter the url "https://www.flipkart.com/"
#And click on my Account Login
#And enter registered username and password
	#|naveenkumar.vavilathota@gmail.com| n9494626227 |
#And click on login button
#Then user must be successfully login to the webpage


#Simple login with Data table forms with header
Scenario: Login with valid username and password
Given  open browser
When Enter the url "https://www.flipkart.com/"
#And click on my Account Login
And enter registered username and password
	| user | password |
	| naveenkumar.vavilathota@gmail.com | n9494626227 |
And click on login button
Then user must be successfully login to the webpage
