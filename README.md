# Intro To Web Development and the Internet

A collection of labs and projects from an introductory web development course covering HTML, CSS, and JavaScript fundamentals.

## Labs

- [Lab 2](https://samuelivx.github.io/introToWebDev/)
- [Lab 3](https://samuelivx.github.io/introToWebDev/Lab3.html)
- [Lab 4](https://samuelivx.github.io/introToWebDev/Lab4.html)
- [Lab 5](https://samuelivx.github.io/introToWebDev/Lab5.html)
- [Lab 6](https://samuelivx.github.io/introToWebDev/Lab6.html)
- [Final Project](https://samuelivx.github.io/introToWebDev/finalProject/index.html)

## Final Project API Key

The final project fetches from the Finnhub API using a key that is **not committed**.
To run it locally:

1. Copy `finalProject/config.example.js` to `finalProject/config.js`
2. Paste your Finnhub key into `config.js` (`window.FINNHUB_API_KEY = "..."`)

`config.js` is gitignored; never commit your key.

## Tests

```sh
npm test
```

Runs the `node:test` suite in `test/` (jsdom smoke tests for the final project's
stock/news rendering and a check that no hardcoded API key is present).