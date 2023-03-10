const generateMarkdown = require('./utils/generateMarkdown.js');

// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
// description, installation instructions, usage information, 
// contribution guidelines, and test instructions
const questions = [
    'What is the title of the project?',
    'Please input the project description: ',
    'Please input installation instruction for this project (ex: npm i): ',
    'Please input usage information for this project: ',
    'Please input contribution guidelines for this project: ',
    'Please input test instructions for this project: ',
    'Please choose license used for this project: ',
    'Please input your GitHub username: ',
    'Please input your email address: ',
    'Please input credits for your collaborators or third-party assets/tutorials you used for this project : ',
];

// Function for validating email address
// Referenced from: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

// function to write README file
function writeToFile(fileName, data) {
    //Content for README
    const readme = generateMarkdown.generateMarkdown(data);

    fs.writeFile(fileName, readme, (error) =>
        error ? console.error(error) : console.log('README file has been generated successfully!')
    );
}

// function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: questions[0],
                validate: function (input){
                    if(input.length < 1){
                        console.log("Please input your project name");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1],
                validate: function (input){
                    if(input.length < 1){
                        console.log("Please input your project description");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'contribution_guide',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'test_ins',
                message: questions[5],
            },
            {
                type: 'list',
                name: 'license',
                message: questions[6],
                choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 
                'BSD 3-Clause "New" or "Revised" License', 'Eclipse Public License 2.0',
                'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
                'Mozilla Public License 2.0', 'The Unlicense'],
            },
            {
                type: 'input',
                name: 'github',
                message: questions[7],
                validate: function (input){
                    if(input.length < 1){
                        console.log("Please input your GitHub username");
                        return false;
                    }
                    return true;
                }
            },
            {
                type: 'input',
                name: 'email',
                message: questions[8],
                validate: function(email){
                    if(validateEmail(email)){
                        return true;
                    }
                    console.log("Please input valid email address");
                    return false;
                }
            },
            {
                type: 'input',
                name: 'credits',
                message: questions[9],
            },

        ])
    .then((data) => {
        const fileName = `generated_README.md`;
 
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
