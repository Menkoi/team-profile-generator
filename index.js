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
    ])//.then(answers => {
       // const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
       // teamMembers.push(manager);
       // idArray.push(answers.managerId);
       // createTeam();
   // });
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