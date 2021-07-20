## About

URL Shortener App

## Pre-Installation

In order to use the bitly API you need an `Authentication token`, which you will put in the environment variables (`.env`) of the project. Use the [Bitly API](https://dev.bitly.com/docs/getting-started/authentication/) to create a token. 

Rename `.env.dist` to `.env` and insert your token
`REACT_APP_BITLY_AUTORIZATION_TOKEN={TOKEN}`

## Installation & setup

Run `docker-compose up --build` to start services. Make sure you've copied `.env.dist` to `.env` with the access token in place.

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## Frontend Available Scripts

`cd frontend`

In the frontend project directory, you can run:

#### `make test`

Launches the test runner in the interactive watch mode.

#### `make lint`

Check and fix based on linting rules


## E2E tests using Cypress

`cd e2e-tests`

`yarn install`

`yarn start`

Launches the cypress app. Click on the spec file to start the test. Before starting the test, ensure the app is running on [http://localhost:3000](http://localhost:3000)
