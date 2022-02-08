const inquirer = require("inquirer");
const Manager = require("./src/manager");
const Intern = require("./src/intern");
const Engineer = require('./src/engineer');

// Create an array to hold all employee objects
const team = [];

// Starting code for creating the team manager
const manager = inquirer.prompt([
    {
        type: "input",
        name: "managerName",
        message: "Team Manager Name:"
    },
    {
        type: "input",
        name: "managerId",
        message: "Team Manager ID:"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "Team Manager Email:"
    },
    {
        type: "input",
        name: "managerOffice",
        message: "Team Manager Office Number:"
    }
]).then( (data) => {
    const {managerName, managerId, managerEmail, managerOffice} = data;
    const newManager = new Manager(managerName, managerId, managerEmail, managerOffice);
    team.push(newManager);
    newEmployee();
})


// Code for selecting what type of employee to create next (if any)
const newEmployee = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "addEmployee",
            choices: [
                "Add an Engineer",
                "Add an Intern",
                "Don't add any more team members"
            ]
        }
    ]).then( (data) => {
        if (data.addEmployee == "Add an Engineer") {
            inquirer.prompt([
                {
                type: "input",
                name: "engineerName",
                message: "Engineer Name:"
                },
                {
                type: "input",
                name: "engineerId",
                message: "Engineer Id:"
                },
                {
                type: "input",
                name: "engineerEmail",
                message: "Engineer Email:"
                },
                {
                type: "input",
                name: "engineerGithub",
                message: "Engineer github:"
                },
            ]).then( (data) => {
                const {engineerName, engineerId, engineerEmail, engineerGithub} = data;
                const newEngineer = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                team.push(newEngineer);
                newEmployee();
            })
        } else if (data.addEmployee == "Add an Intern") {
            inquirer.prompt([
                {
                type: "input",
                name: "internName",
                message: "Intern Name:"
                },
                {
                type: "input",
                name: "internId",
                message: "Intern Id:"
                },
                {
                type: "input",
                name: "internEmail",
                message: "Intern Email:"
                },
                {
                type: "input",
                name: "internSchool",
                message: "Intern School:"
                },
            ]).then( (data) => {
                const {internName, internId, internEmail, internSchool} = data;
                const newIntern = new Intern(internName, internId, internEmail, internSchool);
                team.push(newIntern);
                newEmployee();
            })
        } else {
            console.log("Ending process...")
            return;
        }
    });
}
