🎯 Playwright API Automation Portfolio
Welcome to my API Automation Testing Framework built with Playwright ⚡
This project demonstrates my ability to design scalable, maintainable, and client-ready API test frameworks.


✨ Features
✅ Playwright API Testing – End-to-end API automation with APIRequestContext

✅ Reusable Base API Layer – Common GET, POST, PUT, PATCH, DELETE methods

✅ Modular API Clients – JSONPlaceholder & DummyJSON APIs implemented

✅ Fixtures for API Clients – Easy injection of API objects into tests

✅ Authentication Handling – Example login + token usage (DummyJSON)

✅ Chained API Flows – Realistic test flows (Auth → CRUD → Search)

✅ Centralized Test Data – testData.ts for payloads & reusability

✅ Standardized Messages & Status Codes – Consistency across tests

✅ Scalable Folder Structure – Industry-standard separation of concerns

✅ Tagging Support (@smoke, @regression) – Run targeted test sets


📂 Project Structure
apis/                   
  baseApi.ts            # Abstract base class (GET, POST, PUT, PATCH, DELETE)
  dummyjson/            # DummyJSON specific APIs
    usersApi.ts
  jsonplaceholder/      # JSONPlaceholder specific APIs
    usersApi.ts

tests/                  
  dummyjson/
    chaining.spec.ts    # Auth + CRUD + Search flow
  jsonplaceholder/
    usersCrud.spec.ts   # Full CRUD test suite

common/                 
  messages.ts           # Standard messages/logs
  statusCodes.ts        # HTTP status codes
  endpoints.ts          # Base URLs & endpoints
  headers.ts            # Auth header builder
  testData.ts           # Test payloads & data

fixtures.ts             # Custom Playwright fixtures for API clients
Playwright.config.ts    # Contains all required configurations
package.json            # Contains required dev dependencies


🚀 Getting Started
1️⃣ Clone the repo
git clone https://github.com/markadvk/playwright-api-portfolio.git
cd playwright-api-portfolio

2️⃣ Install dependencies
npm install

3️⃣ Run tests
# Run all tests
npx playwright test

# Run only smoke tests
npx playwright test --grep @smoke

4️⃣ View reports
npx playwright show-report


📊 Example Test Flow

✔ Login & Auth Token Generation
✔ CRUD operations on Users
✔ Search API validation

This mimics real-world client scenarios, showing how API flows are automated and verified step by step.


🎯 Why Clients Will Love This
Feature	Benefit
♻️ Reusable & Scalable	Add new APIs easily by extending BaseApi
🛠 Maintainable	Shared constants, test data, and status codes
📊 Professional Reports	Playwright’s rich HTML reports
🔗 Real-World Examples	Auth, CRUD, search, chained flows
🚀 Freelancing Ready	Adaptable to any REST API project quickly
💡 What I Can Do for You

As a freelancer, I can help clients:

🏗 Build custom API testing frameworks from scratch

🔗 Integrate API automation with Playwright

⚙️ Set up CI/CD pipelines (GitHub Actions, Jenkins, etc.)

📑 Provide detailed test reports for QA sign-off

📦 Deliver scalable, maintainable automation suites


📬 Contact Me

If you’re looking for a skilled Automation Engineer to build or enhance your testing framework:
👉 LinkedIn(yet to add)
 • Email(yet to add)
 • Portfolio(yet to add)

✨ With this repo, you’ll see not just my technical skills, but also how I structure automation projects for professional delivery.