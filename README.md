## About

URL Shortener App

### Pre-Installation

In order to use the bitly API you need an `Authentication token`, which you will put in the environment variables (`.env`) of the project. Use the [Bitly API](https://dev.bitly.com/api-reference#operation/createBitlink) to create a token. 

Rename `.env.dist` to `.env` and insert your token
`REACT_APP_BITLY_AUTORIZATION_TOKEN={TOKEN}`

### Installation & setup

Run `yarn install` to install dependancies. Make sure you've copied `.env.dist` to `.env` with the access token in place.


### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\

#### `yarn lint`

Check and fix based on linting rules

#### `yarn run cypress open`

Runs Cypress e2e tests
