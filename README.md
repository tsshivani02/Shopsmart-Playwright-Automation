# ShopSmart Playwright Automation

## Overview
End-to-end UI automation project built with Playwright and TypeScript.
The project demonstrates reusable Page Objects, fixtures, test data, environment configuration, assertions, and failure diagnostics.

## Tech Stack
- Playwright
- TypeScript
- Node.js
- Git and GitHub

## Project Structure
- pages/ — Page Object classes
- fixtures/ — Reusable test fixtures
- tests/ — Automated test cases
- test-data/ — Test data files
- utils/ — Reusable utilities, including logging
- constants/ — Shared constants

## Covered Scenarios
- Login validation
- Product selection and cart
- Checkout information and overview
- Order completion and confirmation
- Data-driven login testing
- API testing
- Screenshots, traces, and HTML reports

## Setup
1. Install Node.js and Git.
2. Clone this repository.
3. Run npm install.
4. Install the required Playwright browsers if needed.
5. Configure local environment variables using .env.example.

## Run Tests
npx playwright test

## View HTML Report
npx playwright show-report

## Security
Do not commit .env files, credentials, tokens, or other secrets.