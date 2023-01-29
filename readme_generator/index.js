const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Content for README
    const readme = generateMarkdown.generateMarkdown(data);

    fs.writeFile(fileName, readme, (error) =>
        error ? console.error(error) : console.log('README file has been generated successfully!')
    );
}

// TODO: Create a function to initialize app
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
        ])
    .then((data) => {
        const fileName = `README.md`;
 
        writeToFile(fileName, data);
    });
}

// Function call to initialize app
init();
