# orangeProject
Cypress automation project implementing the Page Object Model (POM) to test key user workflows on the OrangeHRM web application — including login, profile update, and logout functionalities.


# 🧪 Cypress OrangeHRM Automation (Page Object Model)
# 📘 Project Overview

This project automates core user actions on the OrangeHRM
 web application using Cypress and the Page Object Model (POM) design pattern.

The automation covers the following key flows:

✅ Login to OrangeHRM

✅ Edit and update personal information

✅ Logout successfully

# ⚙️ Tech Stack

- Language: JavaScript

- Framework: Cypress

- Design Pattern: Page Object Model (POM)

- Testing Type: UI Functional Testing

# 📁 Project Structure

cypress/
│
├── e2e/
│   └── tests/
│       └── customLogin.cy.js          // Test file for login and edit info
│
├── pageObjects/
│   ├── loginPage.js                   // Handles login page elements & actions
│   ├── dashboardPage.js               // Handles dashboard actions
│   └── personalInfoPage.js            // Handles profile editing
│
├── fixtures/                          // Test data (if any)
│
└── support/
    └── commands.js                    // Custom Cypress commands
