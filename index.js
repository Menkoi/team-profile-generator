
const Engineer = require('./lib/Engineer'); 
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern'); 

const render = require('./src/generate-html');
const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs'); 

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const teamMembers = [];
const idArray = [];


function questions() {

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
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
    });
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
                createEngineer();
                break;
            case "Intern":
                createIntern();
                break;
            default:
             team();
        }
    });
}

function createEngineer() {
    inquirer.prompt([
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
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
    });
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
            type: "input",
            name: "internSchool",
            message: "What is your intern's school?",
            validate: answer => {
                if (answer !== "") {
                    return true;
                }
                return "Please enter at least one character.";
            }
        }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
    });
}
function team() {
    fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
}

 createManager();

}


questions()



