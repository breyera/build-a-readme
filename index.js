var inquirer = require('inquirer');

let readMeInfo = async () => {
    // create variable for answers 
    const answers = await inquirer.prompt([
        //ask questions for users to input information using inquirer
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'projectName'
        },
        {
            type: 'input',
            message: 'Enter a brief description of your project: ',
            name: 'description'
        },
        {
            type: 'input',
            message: 'If applicable, describe the steps required to install your project.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How will this project be used? Provide instructions and examples of your project.',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Chose the appropriate license for this project: ',
            name: 'license',
            choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT', 'Mozilla', 'Open']
        },
        {
            type: 'input',
            message: 'Who contributed to this project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'Is there a test included?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'What do I do if I have an issue?',
            name: 'questions'
        },
        {
            type: 'input',
            message: 'Please enter your GitHub username.',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Please enter your email address.',
            name: 'email'
        }
    ])
    //user answers to fill a readme page
    const { projectName, description, installation, usage, license, contributing, tests, questions, username, email } = answers;
    const readMePage = `<h1>${ projectName }</h1>

    ![badge](https://img.shields.io/badge/license-${ license }-brightgreen)
    <br />
    
    ## Description
    
    🔍 ${ description }
    
    ## Table of Contents
    
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    
    ## Installation
    
    💾 ${ installation }
    
    ## Usage
    
    💻 ${ usage }
    
    ## License
    
    ![badge](https://img.shields.io/badge/license-${ license }-brightgreen)
    <br />
    This application is covered by the ${ license } license.
    
    ## Contributing
    
    👪 ${ contributing }
    
    ## Tests
    
    ✏️ ${ tests }
    
    ## Questions
    
    ${ questions }<br />
    <br />
    Find me on GitHub: [${ username }](https://github.com/${ username })<br />
    <br />
    Email me with any questions: ${ email }<br />`;
    //write user inputs to a new readme file
    const fs = require('fs');
        fs.writeFile('./example-readme/README.md', readMePage, (error) => {
            if (error) {
                console.log(error);
            } else {
                console.log('Stored Successfully');
            }
        });
}
//call function and create readme
readMeInfo();