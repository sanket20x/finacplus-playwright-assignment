# Demoqa and Reqress automation using Playwright, Javascript

This repository contains UI and API automation tests implemented using **Playwright with JavaScript** as part of the QA study.

The project covers both **UI automation** (DemoQA Book Store) and **API automation** (ReqRes mock API).

---

## Tech Stack
- Playwright (JavaScript)
- Node.js
- ReqRes (Mock API for API testing)

---

## Project Structure

- `tests/ui` – UI automation tests
- `tests/api` – API automation tests
- `pages` – Page Object Model classes
- `test-data` – Test data for UI and API
- `output` – Generated output file from UI test
- `docs` – Screenshots and supporting documents

---

## UI Automation Coverage

The UI test automates the following flow on **https://demoqa.com**:

- Navigate to DemoQA
- Navigate to **Book Store Application**
- Login using a manually created user
- Validate username and logout button
- Navigate to Book Store
- Search for **Learning JavaScript Design Patterns**
- Validate the search result
- Extract **Title, Author, Publisher**
- Write book details to a text file
- Logout

---

## API Automation Coverage

The API test uses **ReqRes** (https://reqres.in) and covers:

- Create a user and validate response status
- Validate returned user ID
- Fetch user details using an existing user
- Update user details and validate response

> **Note:** ReqRes is a mock API and does not persist created users.  
> Therefore, an existing user ID is used for GET and PUT validations, which is standard practice when testing sandbox APIs.

---

## API Authentication (Important)

This project uses an **API key generated from ReqRes**.

To verify the API key manually, you can use the following curl command:

```bash
curl -H "x-api-key: YOUR_API_KEY" https://reqres.in/api/users?page=2
