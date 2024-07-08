# Playwright Test Automation

## Introduction

This project demonstrates my skills in test automation using Playwright. It includes a suite of automated tests for an e-commerce website.

## Project Description

The tests are written in TypeScript and follow the Page Object Model (POM) pattern for better maintainability and readability. Playwright is used as the test automation framework to perform end-to-end testing.

## Disclaimer

This project is for demonstration purposes only. It is not affiliated with or endorsed by the e-commerce website being tested. Please do not use this project for any malicious activities or without permission from the website owner.

## Cloning the Repository

Start with cloning the repository:

```bash
git clone git@github.com:nancyvintner/playwright-tests.git
```

## Installation

Install all the packages by running the following in root directory:

```bash
npm install
```

## Environmental variables

Make sure you have env configured: copy `.configs/.env.local` to `.configs/.env`

## Running tests

In order to run the test use the provided scripts:

- `npm run test`
- `npm run test:ui` to run the test in the UI mode
- `npm run test -- WIP.spec.ts` to run the single test, where WIP is the spec file name
- `npm run test -- --trace on` run the test with trace
- `npm run test -- --headed` run tests in headed mode

## Running test on different browsers

You can specify the browser for running tests by selecting the appropriate project:

```bash
npm run test -- --project chromium
```
