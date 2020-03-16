# devtin/unit-converter
![tests](https://github.com/devtin/unit-converter/workflows/test/badge.svg)

This project is built using [vue.js](https://vuejs.org/) on top of [nuxt.js](https://nuxtjs.org/)

- [Requirements](#requirements)
- [Installation](#installation)
- [Dev](#dev)
- [Build](#build)
- [Tests](#tests)
- [Start](#start)
- [CI/CD](#cicd)

## Requirements

- [node.js](https://nodejs.org) >= 12

## Installation

From the terminal:
```sh
git clone git@github.com:devtin/unit-converter.git
cd unit-converter && npm i
```

## Dev

Will run [nuxt.js](https://nuxtjs.org/) in dev mode with source files from the [client](./client) directory.

```sh
PORT=3000 npm run dev
```

## Build

[nuxt.js](https://nuxtjs.org/) bundles all files in the [client](./client) directory to the [dist](./dist) directory.

```bash
npm run build
```

## Tests

Unit and integration tests are performed using [ava](https://github.com/avajs/ava). Unit tests
can be found with the suffix `.unit.js` in the [client](./client) directory. Integration tests are found
in the [test](./test) directory.

End-to-end tests are performed using [cucumber](https://github.com/cucumber/cucumber-js) with [puppeteer](https://github.com/puppeteer/puppeteer)
and can be found in the [features](./features) directory.

```sh
# unit & integration tests
NODE_ENV=test npm run test

# end to end tests (building project from 'client')
NODE_ENV=test npm run test:e2e

# e2e test (using previously built project located in the 'dist' folder)
NODE_ENV=production npm run test:e2e
```

## Start

Replace the `PORT` env variable for the desired one. [Nuxt.js](https://nuxtjs.org/) will start the most recent build
on the given `PORT`.

```bash
PORT=3000 npm run start
```

## CI/CD

Merge requests or pushes to `master` will require commits to have workflow [test](/.github/workflows/test.yml) passing.

The `test` workflow runs whenever a push is received. Once the `test` workflow passes, changes should be able to merge to
`master`.
 
Once changes are merged into `master` it will run the [deploy](./.github/workflows/deploy.yml) workflow deploying
the code automatically to the following heroku project:  

[https://devtin-unit-converter.herokuapp.com/](https://devtin-unit-converter.herokuapp.com/)
