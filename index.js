const Employee = require('./lib/Employee'); // to be created
const Engineer = require('./lib/Engineer'); //to be created
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern'); // to be created

const { writeFile } = require('./src/generate-html.js');
const pageTemplate = require('./src/page-template');
const inquirer = require('inquirer');
const fs = require('fs'); 


function createManager() {
    console.log("Build your team");
    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'what is your manager name?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your manager name. ";
            }
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'what is your manager ID?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your manager ID. ";
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'what is your manager email?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your manager email. ";
            }
        },
        {
            type: 'input',
            name: 'managerOfficeNumber',
            message: 'what is your manager office number?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your manager office number. ";
            }
        }
    ])
}

function createTeam() {

    inquirer.prompt([
        {
            type: "list",
            name: "memberChoice",
            message: "Which type of team member would you like to add?",
            choices: [
                "Engineer",
                "Intern",
                "I don't want to add any more team members"
            ]
        }
    ]).then(userChoice => {
        switch (userChoice.memberChoice) {
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildTeam();
        }
    });
}

function createEngineer() {
   return inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is your engineer's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: 'input',
            name: 'engineerId',
            message: 'what is your engineer ID?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your engineer ID. ";
            }
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'what is your engineer email?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your manager email. ";
            }
        },
        {
            type: 'input',
            name: 'engineerOfficeNumber',
            message: 'what is your engineer office number?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your manager office number. ";
            }
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is your engineer's GitHub username?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ])
}

function createIntern() {
    return inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is your intern's name?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        },
        {
            type: 'input',
            name: 'internId',
            message: 'what is your intern ID?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your intern ID. ";
            }
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'what is your intern email?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your intern email. ";
            }
        },
        {
            type: 'input',
            name: 'internOfficeNumber',
            message: 'what is your intern office number?',
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "enter your intern office number. ";
            }
        },
    ])
}


createManager()
.then(data => {
    return pageTemplate(data);
 })
.then(pageHTML => {
    return writeFile(pageHTML);
})
.catch(err => {
    console.log(err);
});