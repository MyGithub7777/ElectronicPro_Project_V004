Feature: Register Functionality - Create An Account

Scenario: Register With Valid Details
Given user is on the home page
When user clicks on sign in link
Then user should navigated to login "Login | electronicpro" title page
When user clicks on dont have an account link
Then user should navigated to "Sign up login | electronicpro" title page
When user enters name "Gargi132" and email "Gargi132@gmail.com"
When user enters password "Gargi13452" and confirm password "Gargi13452"
When user clicks on sign up button
Then user created account successfully and navigated to "Sign up login | electronicpro" title page

Scenario: Register With Invalid email Details 
Given user is on the home page
When user clicks on sign in link
Then user should navigated to login "Login | electronicpro" title page
When user clicks on dont have an account link
Then user should navigated to "Sign up login | electronicpro" title page
When user enters name "Gargi133" and email "Gargi133@gmail"
When user enters password "Gargi13452" and confirm password "Gargi13452"
When user clicks on sign up button
Then error msg should be display "Login must be a valid email address"

Scenario: Register With Invalid password Details 
Given user is on the home page
When user clicks on sign in link
Then user should navigated to login "Login | electronicpro" title page
When user clicks on dont have an account link
Then user should navigated to "Sign up login | electronicpro" title page
When user enters name "Gargi133" and email "Gargi133@gmail.com"
When user enters password "Gargi13452" and confirm password "Gargi13"
When user clicks on sign up button
Then error msg should be display as "Passwords do not match; please retype them."







