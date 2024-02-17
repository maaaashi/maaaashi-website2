# Maaaashi's Website

[![Welcome Maaaashi's Website](docs/images/website.png)](https://maaaashi-website2.vercel.app/)

<div align="center">Github repository containing the source code for Maaaashi's Website.</div>

<p align="center">
<!-- <a href="https://github.com/maaaashi/maaaashi-website2/actions/workflows/module-tests.yaml" rel="nofollow">
  <img src="https://github.com/maaaashi/maaaashi-website2/actions/workflows/module-tests.yaml/badge.svg" alt="Module Tests">
</a> -->

<a href="https://github.com/maaaashi/maaaashi-website2/actions/workflows/gauge-tests.yaml" rel="nofollow">
  <img src="https://github.com/maaaashi/maaaashi-website2/actions/workflows/gauge-tests.yaml/badge.svg" alt="Gauge E2E Tests">
</a>
<a href="https://twitter.com/pg_maaaashi" rel="nofollow">
  <img src="https://img.shields.io/badge/created%20by-@pg_maaaashi-4BBAAB.svg" alt="created by X@pg_maaaashi">
</a>

# Table of Contents

- [Maaaashi's Website](#maaaashis-website)
- [Table of Contents](#table-of-contents)
- [Development](#development)
  - [Start Server](#start-server)
  - [E2E](#e2e)
- [Environment](#environment)
  - [Web](#web)
  - [E2E](#e2e-1)

# Development

```bash
$ git clone https://github.com/maaaashi/maaaashi-website2.git
```

## Start Server

```bash
$ cd maaaashi-website2/web
$ npm install
$ npm run dev
```

Access to http://localhost:4321

## E2E

```bash
$ cd e2e/
$ npm install
$ npm run test
```

# Environment

## Web

|Language/Framework/Tool|Version|
|----|----|
|Astro|4.2.4|
|React|18.2.0|
|React-DOM|18.2.0|
|Svelte|4.2.9|
|TailwindCSS|3.4.1|
|TypeScript|5.3.3|
|Axios|1.6.7|
|DaisyUI|4.6.0|
|Theme-Change|2.5.0|
|Astro-icon|1.0.4|
|React-icons|5.0.1|

## E2E

|Language/Framework/Tool|Version|
|----|----|
|gauge-ts|0.1.1|
|ts-node|10.4.0|
|TypeScript|4.4.4|
|@playwright/test|1.41.2|
|@types/node|latest|