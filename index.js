// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
// TODO: Create an array of questions for user input
const questions = [{
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
    name:"usage",
    message: "What are the usage information instructions:",
    type: "input",
},
{
    name:"contribution",
    message: "What are the contribution guidelines instruction:",
    type: "input",
},
{
    name:"test",
    message: "What are the contribution guidelines instruction:",
    type: "input",
}];

inquirer.prompt(questions).then(answers=>{
    console.log(answers);
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
    fs.writeFileSync("Readme.md", createTemplate(answers), err => {
        if (err) throw new Error(err);
        console.log('Readme File is created! See your output in README.md');
    })
});


// TODO: Create a function to initialize app
function init(data) {
    return `
# ${data.name}
/### Built with:
- HTML
-CSS
-JavaScript
-JQuery

<h3>Description:</h3>
<blockquote>
<p>${data.description}</p>
</blockquote>

<h3>Instructions:</h3>
<blockquote>
${data.instructions}
</blockquote>

<h3>Usage:</h3>
<blockquote>
${data.usage}
</blockquote>

<h3>Contribution:</h3>
<blockquote>
${data.contribution}
</blockquote>

<h3>Test Instructions:</h3>
<blockquote>
${data.test}
</blockquote>
`;
};

// Function call to initialize app
init();

//What is the description of your application?
//What are the installation instruction?
//What are the usage information instruction?
//What are the contribution guidelines instruction?
//What are the test instructions instruction?