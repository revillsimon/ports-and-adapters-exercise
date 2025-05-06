# Ports and Adpaters Exercise (Hexagonal Architecture)

## Introduction

This repo provides an example of the excellent architectural style of hexagonal architecture, also know as ports and adapters.

In this simple counter application example (there's nothing simpler than that), the core application business logic lives in the `src/domain` folder. The `CounterService` holds all the business logic required for the operation of the counter, in pure TypeScript and importantly, with **no dependencies**. This means the business logic is completely separate from any implementation.

The `CounterService` uses depedency injection in order to work with a mechanism to persist the state of the counter. This could be implemented in many ways, however, you will see that the service requires an interface provided by `CounterRepository`. So long as the implementation adheres to that interface, it will work. This is why the file system and local storage repositories in `src/infrastucture/persistence` can work interchangably with the service.

The project has been built using TDD and therefore all code has 100% coverage, and mocking any dependencies because of the ports and adapters architecture.

To illustrate how flexible this architecture is, you can run the following scripts to see how the compiled TypeScript modules in the dist folder work seemlessly with a vanilla JavaScript project as well as a TypeScript-powered React app with the Vite build tool.

For more information on Hexagonal Architecture:

https://en.wikipedia.org/wiki/Hexagonal_architecture_(software)

A loosely coupled codebase is easy to test, refactor and scale!

## Getting started

### Install

```shell
$ npm install
```

To run the vanilla project:

```shell
$ npm run dev:vanilla
```

To run the React project:

```shell
$ npm run dev:react
```

## Run the tests and coverage report

To run the tests:

```shell
$ npm run test:units
```

To run the coverage report:

```shell
$ npm run test:units:coverage
```

To view the report, navigate to the generated `coverage` folder and open the `index.html` file in the browser.
