# Insurance BuyFlow

This project implements an insurance buying flow for developers and designers. The designer flow includes an additional step for collecting the customer's first and last name. The project follows an atomic design methodology for better component organization and reuse.

## Table of Contents

- [Designer Insurance BuyFlow](#designer-insurance-buyflow)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Development](#development)
  - [Project Structure](#project-structure)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [License](#license)
  - [The achieved task](#setup)

## Features

- Insurance buying flow for developers and designers.
- Additional step in the designer flow to collect first and last names.
- Validation for required fields to ensure data integrity.
- Organized using atomic design principles.

## Development

### Atomic Design

The project follows the atomic design methodology. Components are categorized into:

- **Atoms:** Basic building blocks like buttons, inputs, etc.
- **Molecules:** Combinations of atoms like forms, input groups, etc.
- **Organisms:** Groups of molecules forming distinct sections of the application.
- **Pages:** High-level components representing different pages/screens.

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── atoms/
│   │   │   ├── Button/
│   │   │   │   ├── index.tsx
│   │   │   │   └── tests/
│   │   │   │       └── index.test.tsx
│   │   │   └── InputField/
│   │   │       ├── index.tsx
│   │   │       └── tests/
│   │   │           └── index.test.tsx
│   │   ├── molecules/
│   │   │   ├── AgeStep/
│   │   │   │   ├── index.tsx
│   │   │   │   └── tests/
│   │   │   │       └── index.test.tsx
│   │   │   ├── EmailStep/
│   │   │   │   ├── index.tsx
│   │   │   │   └── tests/
│   │   │   │       └── index.test.tsx
│   │   │   ├── NameStep/
│   │   │   │   ├── index.tsx
│   │   │   │   └── tests/
│   │   │   │       └── index.test.tsx
│   │   │   └── SummaryStep/
│   │   │       ├── index.tsx
│   │   │       └── tests/
│   │   │           └── index.test.tsx
│   │   ├── organisms/
│   │   │  └── BuyFlow/
│   │   │       ├── index.tsx
│   │   │       └── tests/
│   │   │           └── index.test.tsx
│   │   ├── test/
│   │   │  └── mocks/
│   │   │  │    ├── index.ts
│   │   │  └── utils.ts
│   │   │  
│   │   ├── types/
│   │   │    └── index.ts
│   │   │  
│   │   └── utils/
│   │       └── tests/
│   │       │    ├── index.ts
│   │       └── index.ts
│   │      
│   │── pages/
│   │   ├── buy/
│   │   │   ├── insurance/
│   │   │   │   ├── Developer/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   └── tests/
│   │   │   │   │       └── index.test.tsx
│   │   │   │   └── Designer/
│   │   │   │       ├── index.tsx
│   │   │   │       └── tests/
│   │   │   │           └── index.test.tsx
│   │   │── _app.tsx
│   │   │── _document.tsx_
│   └   └── index.tsx
└── configuration files
```

## Installation

1. **Install dependencies:**
   ```sh
   yarn
   ```

## Running the Application

To start the development server:

```sh
yarn dev
```

The application will be available at `http://localhost:3000`.

## Testing

To run the tests:

```sh
yarn test
```

This will run all unit and integration tests using Jest and React Testing Library.

### Code Formatting and Linting

Ensure code quality and consistency with Prettier and ESLint:

- **Format code:**
  ```sh
  yarn format
  ```

- **Lint code:**
  ```sh
  yarn lint
  ```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive commit messages.
4. Push your changes to your fork.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

# Frontend Coding Challenge

## Setup
This is your personal **private** repository for the coding challenge. Please **create a new branch** for your changes, do not push to `main` directly.

This [Next.js](https://nextjs.org/) app is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

###  Getting Started

```bash
# install dependencies
yarn
# run dev-server
yarn dev
# open http://localhost:3000 to see the result
```

## Task context
This project represents an (overly simplified) application that implements the insurance buying flow (further referred to as “buyflow”). A buyflow is a sequence of steps arranged in a specific order. Each step collects some data from a user that is later presented for confirmation in the summary step. In a real-life project this would be followed by the checkout and purchase process, but these parts are excluded from this project for the sake of simplicity.

## Assignment
Add a new flow next to the existing developer insurance buyflow for a “designer insurance”. The flow should have the same steps as the dev insurance but with 1 additional step to collect the customer’s first and last name and display them in the summary step. Make sure it is not possible to proceed to the next step if the required field data is missing.

## Some things to keep in mind
- The code of the provided application is not final and is **intentionally** left not ideal. That means that it is **expected** of you to change it if you believe it improves code readability, maintainability, and scalability or if you believe the code deviates from the industry standards or best practices.
- Treat this like a production app and assume that once you’re done with this feature, more features will be added to it by you and your coworkers. That means check the details of what you’re doing and how it should fit into the codebase.
- The scope of this task is purely functional. UI and UX aspects are not important.
- You shouldn’t need to add additional package dependencies to complete the task, but you can if you want.
- Try to keep your commits history well organised and clean, like you would do in a pull request for a real task assignment.
- You can take as long as you want, but most candidates spend between 2 and 6 hours on the task.

## Submission
When you are done, please create a pull request from your working branch to `main` and  send us the link to it.

## Above all: have fun!✌🏻
