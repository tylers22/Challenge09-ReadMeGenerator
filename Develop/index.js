// TODO: Include packages needed for this application
const inquirer = require("inquirer"); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the tilte of your project'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for you project?',
        choices: ['MIT', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => {
        console.log("user Input is ", response); 
        //generate the readme.md file 
    })
}

// Function call to initialize app
init();
