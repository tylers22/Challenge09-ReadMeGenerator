// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project'
      },

      {
        type: 'input',
        name: 'description',
        message: 'Please enter the description of your project'
      },

      {
        type: 'input',
        name: 'installation',
        message: 'Please describe the installation of your project'
      },

      {
        type: 'input',
        name: 'usage',
        message: 'Please describe the usage of your project'
      },

      {
        type: 'input',
        name: 'credits',
        message: 'Please call out any credits or sources?',
      },

      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for you project?',
        choices: ['MIT', 'None'],
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("Inside the function" ); 
    fs.writeFile(fileName, data, (error)=>{
        if (error) throw new Error(error);

        console.log(fileName, " generated sucessfully !!!"); 
    })
    
}

// TODO: Create a function to initialize app
function init() {
    console.log("Welcome to README generator.......")
    inquirer.prompt(questions).then(response => {
        console.log("user Input is ", response); 
        //generate the readme.md file 
        writeToFile('README.md', generateMarkdown(response)); 
    })
}

// Function call to initialize app
init();
