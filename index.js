// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
        name: "name", 
        message:"What is the name of your project title?",
        type: "input",
        validate: titleInput => {
            if (titleInput) {return true;
            }else{console.log('Please enter your title!');
             return false}
        }
        },
        {
        name:"description",
        message:"What is the description of your project?",
        type: "input",
        validate: descriptionInput => {
            if (descriptionInput) {return true;
            }else{console.log('Please enter your description!');
             return false}
        }
        },
        {
        name:"instructions",
        message: "What are your installation instructions:",
        type: "input",
        validate: instructionsInput => {
            if (instructionsInput) {return true;
            }else{console.log('Please enter your instructions!');
             return false}
        }
        },
        {
        name:"license",
        message: "What license's are you using:",
        choices: ['MIT', 'OpenSSL', 'None'],
        type: "list"
        },
        {
        name:"contribution",
        message: "Who are the contributors:",
        type: "input",
        validate: contributionInput => {
            if (contributionInput) {return true;
            }else{console.log('Please enter your contribution!');
             return false}
        }
        },
        {
        name:"test",
        message: "What are the testing instructions:",
        type: "input",
        validate: testInput => {
            if (testInput) {return true;
            }else{console.log('Please enter your testing requirements!');
             return false}
        }
        },
        {
        name:"github",
        message: "What is your Github username:",
        type: "input",
        validate: githubInput => {
            if (githubInput) {return true;
            }else{console.log('Please enter your Github username!');
             return false}
        }
        },
        {
        name:"email",
        message: "What is your email:",
        type: "input",
        validate: emailInput => {
            if (emailInput) {return true;
            }else{console.log('Please enter your Email address!');
             return false}
        }
        }
    ])
}

function writeToFile(data){
    return new Promise((resolve, reject) => {
        fs.writeFile('./File/README.md', data, (err) => {
            if (err) {reject(err);return;}

            resolve({ok: true,
                message: 'Your ReadMe is in the File folder!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    questions().then(answers => {return answers})
    .then (data => {return generateMarkdown(data)})
    .then(answers => {return writeToFile(answers)})
}
    
// Function call to initialize app
init();