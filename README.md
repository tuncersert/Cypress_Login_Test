# Cypress Login Test 
This framework has been created on Cypress for UI tests. Page Object Model has been used to improve readability and maintenance of the framework. 
Two functions/methods added to ***command.js*** file to make the tests stable and easy to read. These methods are '***checkElementText***' and '***checkURL***'. 
In addition, one '**_login_**' function/method added to _**helper.js**_ class to make it easier and reusable while logging in.

To be able to execute the tests locally, users needs to install cypress to their devices. 
The information of installation can be found in this link: https://docs.cypress.io/guides/getting-started/installing-cypress#Direct-download.
After installation the link of the repository (https://github.com/tuncersert/Cypress_Login_Test.git) should be cloned and opened by an IDE. 
VSC can be used to open the framework. The link of the VSC can be found here: https://code.visualstudio.com/download.

To run the tests automatically without opening the cypress console, user should use '_**npx cypress run**_' command. 
To open the cypress console and run it manually, user should use '**_npx cypress open_**' command, and click on the test name to run it locally.
Incase a test case fails, framework will create a screenshot inside the _**screenshot**_ folder, 
and it will automatically create a video record regarding the tests inside the _**videos**_ folder.(it only generates videos and screenshot when user runs the test by using npx cypress run command)
