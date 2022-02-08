const inquirer = require("inquirer");
const Manager = require("./src/manager");
const Intern = require("./src/intern");
const Engineer = require('./src/engineer');

// Create an array to hold all employee objects
const team = [];

// Starting code for creating the team manager
inquirer.prompt([
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
    const employee = new Manager(managerName, managerId, managerEmail, managerOffice);
    team.push(employee);
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
                const employee = new Engineer(engineerName, engineerId, engineerEmail, engineerGithub);
                team.push(employee);
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
                const employee = new Intern(internName, internId, internEmail, internSchool);
                team.push(employee);
                newEmployee();
            })
        } else {
            console.log("Ending process...")
            console.log(team);
            return;
        }
    });
}


const writeToFile = (data) => {
    FileSystem.writeFile('./dist/index.html', (data, err) => {
        err ? console.log(err) : console.log("Team Profile Created");
    })
}


const generateManager = () => {
    return `
<div class="card-container">
    <div class="card-top">
        <h1>${Manager.name}</h1>
        <p>Manager</p>
    </div>
    <div class="card-bottom">
        <div><p>ID: ${Manager.id}</p></div>
        <div><span>Email</span> <span><a href=""></a></span></div>
        <div><p>Office Number ${Manager.office}</p></div>
    </div>
</div>
`
}

const generateEngineer = () => {
    reutrn `
    <div class="card-container">
    <div class="card-top">
        <h1>${Engineer.name}</h1>
        <p>Engineer</p>
    </div>
    <div class="card-bottom">
        <div><p>ID: ${Engineer.id}</p></div>
        <div><span>Email</span> <span><a href=""></a></span></div>
        <div><p>GitHub ${Engineer.github}</p></div>
    </div>
</div>    
`
}

const generateIntern = () => {
    return `
<div class="card-container">
    <div class="card-top">
        <h1>${Intern.name}</h1>
        <p>Intern</p>
    </div>
    <div class="card-bottom">
        <div><p>ID: ${Intern.id}</p></div>
        <div><span>Email</span> <span><a href=""></a></span></div>
        <div><p>School: ${Intern.school}</p></div>
    </div>
</div>    
`
}