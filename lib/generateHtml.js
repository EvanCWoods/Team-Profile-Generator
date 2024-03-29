const Employee = require("../src/employee");


const generateManager = (Manager) => {
    return `
    <div class="card-container">
        <div class="card-top">
            <h1>${Manager.name}</h1>
            <h2>Manager</h2>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Manager.id}</p></div>
            <div><span>Email: </span><span><a href="mailto:${Manager.email}">${Manager.email}</a></span></div>
            <div><p>Office: ${Manager.office}</p></div>
        </div>
    </div>
`
}

const generateEngineer = (Engineer) => {
    return `
    <div class="card-container">
        <div class="card-top">
            <h1>${Engineer.name}</h1>
            <h2>Engineer</h2>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Engineer.id}</p></div>
            <div><span>Email: </span> <span><a href="mailto:${Engineer.email}">${Engineer.email}</a></span></div>
            <div>GitHub: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></div>
        </div>
    </div>    
`
}

const generateIntern = (Intern) => {
    return `
    <div class="card-container">
        <div class="card-top">
            <h1>${Intern.name}</h1>
            <h2>Intern</h2>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Intern.id}</p></div>
            <div><span>Email: </span> <span><a href="mailto:${Intern.email}">${Intern.email}</a></span></div>
            <div><p>School: ${Intern.school}</p></div>
        </div>
    </div>    
`
}

const assignEmployees = (employees) => {
    const employeeArray = [];

    for (let i=0; i<employees.length; i++) {
        const employee = employees[i];
        const position = employee.getRole();

        if (position == "Manager") {
            const manager = generateManager(employee);
            employeeArray.push(manager);
        } else if (position == "Engineer") {
            const engineer = generateEngineer(employee);
            employeeArray.push(engineer);
        } else {
            const intern = generateIntern(employee);
            employeeArray.push(intern);
        } 
    }

    const employeesHtml = employeeArray.join("");

    const showTeam = showEmployees(employeesHtml);
    return showTeam;
}

const showEmployees = (employeesHtml) => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>My Team</h1>
    </header>
    <div id="team-container">${employeesHtml}</div>
</body>
</html>
`
}

module.exports = assignEmployees;