# Webpack template for web modules

A simple template for building npm packages.

Includes **TypeScript**, **Babel** and **Jest**.

## Publishing

Before you publish your package make sure that you've changed...

- name
- description
- main
- types

... in the package.json file, then run:

```shell
npm publish
```

## Building and running on localhost

First install dependencies:

```shell
npm install
```

To create a production build:

```shell
npm run production
```

To create a development build:

```shell
npm run dev
```

To run tests

```shell
npm run test
```

## Running

```shell
node dist/main.js
```
