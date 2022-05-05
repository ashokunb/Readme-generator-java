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
},
{
    name:"description",
    message:"What is the description of your project?",
    type: "input",
},
{
    name:"instructions",
    message: "What are your installation instructions:",
    type: "input",
},
{
    name:"license",
    message: "What license are you using:",
    choices: ['MIT', 'OpenSSL', 'None'],
    type: "list"
},
{
    name:"contribution",
    message: "What are the contribution guidelines instruction:",
    type: "input",
},
{
    name:"test",
    message: "What are the testing instructions:",
    type: "input",
},
{
    name:"github",
    message: "What is your Github username:",
    type: "input",
},
{
    name:"email",
    message: "What is your email:",
    type: "input",
}
])
}

function writeToFile(data){
    return new Promise((resolve, reject) => {
        fs.writeFile('./File/README.md', data, (err) => {
            if (err) {
            reject(err);
                return;}
            resolve({
                ok: true,
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

//What is the description of your application?
//What are the installation instruction?
//What are the usage information instruction?
//What are the contribution guidelines instruction?
//What are the test instructions instruction?