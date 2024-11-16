# WDIO Final Task EPAM

The project was about automating UI tests using **Webdriver.IO** with **BDD** framework **Cucumber** for validating login form functionality. The tests include testing different user scenarios, the correctness of handling errors. The functinality was tested in two browsers (**Chrome** and **Firefox**). Also I have created **HTML report** using **allure reporting** library.

## Test Scenarious
1. **UC-1 Test Login form with empty credentials:**<br />

  - Type any credentials into "Username" and "Password" fields.
  - Clear the inputs.
  - Hit the "Login" button.
  - Check the error messages: "Username is required".
    
2. **UC-2 Test Login form with credentials by passing Username:**

  - Type any credentials in username.
  - Enter password.
  - Clear the "Password" input.
  - Hit the "Login" button.
  - Check the error messages: "Password is required".

3. **UC-3 Test Login form with credentials by passing Username & Password:**

- Type credentials in username which are under Accepted username are sections.
- Enter password as secret sauce.
- Click on Login and validate the title “Swag Labs” in the dashboard.
  
## Tools and Technologies
- **Node.js**: JavaScript runtime environment.
- **WebdriverIO**: Driver to run tests in browsers.
- **Allure Reporter**: For generating detailed test reports.
- **Cucumber Framework**: For BDD-style test writing.
- **Browsers**: Chrome and Firefox.
  
## Setup instructions
1. Clone the repository to the local machine
   ```bash
   git clone https://github.com/PolinianCode/final-task-epam.git
2. Go to the repository folder
   ```bash
   cd ./final-task-epam
3. Installing dependencies
   Ensure that you have installed Node.js 18.0+ to have an access to all frameworks
   ```bash
   node -v
    ```
   If you dont have installed Node.js, you can download it here (https://nodejs.org/en).
   To install all required dependencies use command
   ```bash
   npm install
4. Run tests
   ```bash
   npm run test

## Report generating
To generate beauitiful HTML report with different charts, you need to have installed allure reported in the project. It was automaticly installed in the previous step. To generate and open enter this command into the terminal
```bash
allure generate & allure open
```
## Test Results
![{05EFF790-EAA6-4115-BF9D-442CB88F20A8}](https://github.com/user-attachments/assets/df1a4229-0825-4f09-8c41-8887a0738cfd)

