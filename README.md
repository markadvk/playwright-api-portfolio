Playwright API Automation Portfolio

Welcome to my API Automation Testing Framework built with Playwright.
This project demonstrates my ability to design scalable, maintainable, and client-ready API test frameworks.

✨ Features of This Framework

✅ Playwright API Testing – End-to-end API automation with Playwright’s APIRequestContext
✅ Reusable Base API Layer – All API methods (GET, POST, PUT, PATCH, DELETE) in one place
✅ Modular API Clients – Dedicated API classes for JSONPlaceholder & DummyJSON
✅ Fixtures for API Clients – Easy injection of API objects into tests
✅ Authentication Handling – Example of login + token usage (DummyJSON)
✅ Chained API Flows – Realistic test flows (Auth → CRUD → Search)
✅ Test Data Management – Centralized testData.ts for reusability
✅ Standardized Messages & Status Codes – Improves readability & maintainability
✅ Scalable Folder Structure – Industry-standard separation of concerns
✅ Tagging Support (@smoke, @regression) – Run targeted test sets easily

📂 Project Structure
apis/                   # API clients
  baseApi.ts            # Abstract base class (GET, POST, PUT, PATCH, DELETE)
  dummyjson/            # DummyJSON specific APIs
    usersApi.ts
  jsonplaceholder/      # JSONPlaceholder specific APIs
    usersApi.ts

tests/                  # Playwright test cases
  dummyjson/
    chaining.spec.ts    # Auth + CRUD + Search flow
  jsonplaceholder/
    usersCrud.spec.ts   # Full CRUD test suite

common/                 # Shared test utilities
  messages.ts           # Standard messages/logs
  statusCodes.ts        # HTTP status codes
  endpoints.ts          # Base URLs & endpoints
  headers.ts            # Auth header builder
  testData.ts           # Test payloads & data

fixtures.ts             # Custom Playwright fixtures for API clients


🚀 How to Run

Clone this repo:
git clone https://github.com/<your-username>/playwright-api-portfolio.git

Install dependencies:
npm install

Run all tests:
npx playwright test

Run only smoke tests:
npx playwright test --grep @smoke

View HTML report:
npx playwright show-report


🎯 Why Clients Will Love This

Reusable & Scalable → Add new APIs easily by extending BaseApi
Maintainable → Shared constants, test data, and status codes
Professional Reports → Playwright’s built-in HTML reports
Real-World Examples → Authentication, CRUD, and chained flows
Freelancing Ready → Can be adapted to any REST API project quickly


💡 What I Can Do for You

💼 As a freelancer, I can help clients:
Build custom API testing frameworks from scratch
Integrate API automation in Playwright
Add CI/CD pipelines (GitHub Actions, Jenkins, etc.)
Provide detailed test reports for QA sign-off
Deliver scalable, maintainable automation suites


📬 Contact Me

If you’re looking for a skilled Automation Engineer to build or enhance your testing framework:
👉 [LinkedIn Profile / Email / Portfolio Link]
