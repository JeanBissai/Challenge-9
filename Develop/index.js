// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeToFile(fileName,generateMarkdown(data) function (err) {
        if (err)){
            return console.log(err);
        }
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data)) =>{
        console.log(JSON.stringify(data, null ""))
    }}

// Function call to initialize app
init();
