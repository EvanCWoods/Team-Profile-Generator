const Employee = require("../src/employee");


const generateManager = (Manager) => {
    return `
    <div class="card-container">
        <div class="card-top">
            <h1>${Manager.name}</h1>
            <p>Manager</p>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Manager.id}</p></div>
            <div><span>Email: </span><span><a href="">${Manager.email}</a></span></div>
            <div><p>Office Number ${Manager.office}</p></div>
        </div>
    </div>
`
}

const generateEngineer = (Engineer) => {
    return `
    <div class="card-container">
        <div class="card-top">
            <h1>${Engineer.name}</h1>
            <p>Engineer</p>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Engineer.id}</p></div>
            <div><span>Email</span> <span><a href="">${Engineer.email}</a></span></div>
            <div><p>GitHub ${Engineer.github}</p></div>
        </div>
    </div>    
`
}

const generateIntern = (Intern) => {
    return `
    <div class="card-container">
        <div class="card-top">
            <h1>${Intern.name}</h1>
            <p>Intern</p>
        </div>
        <div class="card-bottom">
            <div><p>ID: ${Intern.id}</p></div>
            <div><span>Email</span> <span><a href="">${Intern.email}</a></span></div>
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
    ${employeesHtml}
</body>
</html>
`
}

module.exports = assignEmployees;