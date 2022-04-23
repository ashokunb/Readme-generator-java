const fs = require('fs');
const inquirer = require('inquirer');
const { type } = require('os');
const questions = [{
    name: "name", 
    message:"What is the name of your project title?",
    type: "input",
},
{
    name:"description",
    message:"What is the description of your project?",
    type: "input",
}];

inquirer.prompt(questions).then(answers=>{
    console.log(answers);
    fs.writeFileSync("Readme.md", createTemplate(answers))
});

//data is our answers
function createTemplate(data){
    return `# ${data.name}`
    `#Description:`
    `##${data.nameOne}`
}


//What is the description of your application?
//What are the installation instruction?
//What are the usage information instruction?
//What are the contribution guidelines instruction?
//What are the test instructions instruction?
