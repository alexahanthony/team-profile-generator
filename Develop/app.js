const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

let staff = {};


const managerQuestions = [
    {
      type: "input",
      message: "What is your manager's name?",
      name: "name"
    },
    {
        type: "input",
        message: "What is your manager's id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your manager's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your manager's office number?",
        name: "office"
      }
  ];

const nextQuestions = [
  {
    type: "checkbox",
    message: "Which type of team member would you like to add next?",
    name: "employee",
    choices: ["Engineer", "Intern", "I'm done, thanks!"]
  }
];

const engineerQuestions = [
    {
      type: "input",
      message: "What is your engineer's name?",
      name: "name"
    },
    {
        type: "input",
        message: "What is your engineer's id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your engineer's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your engineer's GitHub username?",
        name: "github"
      }
  ];
  const internQuestions = [
    {
      type: "input",
      message: "What is your intern's name?",
      name: "name"
    },
    {
        type: "input",
        message: "What is your intern's id?",
        name: "id"
      },
      {
        type: "input",
        message: "What is your intern's email?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your intern's school?",
        name: "school"
      }
  ];

function addManager(){
    inquirer
  .prompt(managerQuestions)
  .then(function (response) {
  staff[response.id] = new Manager(response.name,response.id,response.email,response.office);
  askNextQuestions();
})
};

function addEngineer(){
    inquirer
  .prompt(engineerQuestions)
  .then(function (response) {
  staff[response.id] = new Engineer(response.name,response.id,response.email,response.github);
  askNextQuestions();
})
};

function addIntern(){
    inquirer
  .prompt(internQuestions)
  .then(function (response) {
  staff[response.id] = new Intern(response.name,response.id,response.email,response.school);
  askNextQuestions();
})
};

function askNextQuestions(){
    inquirer
  .prompt(nextQuestions)
  .then(function (response) {
        switch (response.employee[0]){
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            case "I'm done, thanks!":
                renderFile();
                break;
            default:
                console.log("switch error")
        }
})

// const htmlFile = 
// `<!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
//         integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
//     <title>Team Profile Generator</title>
// </head>

// <body>
// <!-- NavBar -->
// <div class="container-fluid">
// <div class="jumbotron bg-dark">
//     <div class="container">
//       <h1 class="display-4 text-center text-light">My Team</h1>
//     </div>
//   </div>
// </div>

// <div class="container">
// <div class="row">
  
//   <!-- Card 1 -->
//   <div class="col-4">
//   <div class="card shadow p-3 mb-5" style="width: 18rem;">
//     <div class="card-body bg-warning">
//       <h5 class="card-title person-name">${name}</h5>
//       <p class="card-text person-title">Manager</p>
//     </div>
//     <ul class="list-group list-group-flush">
//       <li class="list-group-item person-id">${id}</li>
//       <li class="list-group-item person-email">${email}</li>
//       <li class="list-group-item person-variable">${office}</li>
//     </ul>
//   </div>
//   </div>

//     <!-- Card 2 -->
//     <div class="col-4">
//     <div class="card shadow p-3 mb-5" style="width: 18rem;">
//       <div class="card-body bg-warning">
//         <h5 class="card-title person-name">${name}</h5>
//         <p class="card-text person-title">Engineer</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item person-id">${id}</li>
//         <li class="list-group-item person-email">${email}</li>
//         <li class="list-group-item person-variable">${github}</li>
//       </ul>
//     </div>
//     </div>
//         <!-- Card 3 -->
//         <div class="col-4">
//     <div class="card shadow p-3 mb-5" style="width: 18rem;">
//       <div class="card-body bg-warning">
//         <h5 class="card-title person-name">${name}</h5>
//         <p class="card-text person-title">Intern</p>
//       </div>
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item person-id">${id}</li>
//         <li class="list-group-item person-email">${email}</li>
//         <li class="list-group-item person-variable">${school}</li>
//       </ul>
//     </div>
//     </div>
  
// </div>
// </div>

// <!-- footer -->
// <!-- <div class="container">
//     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
//       <a class="navbar-brand text-center text-light">Copyright Alexa Anthony</a>
//     </nav>
//   </div> -->

//     <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"
//         integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n"
//         crossorigin="anonymous"></script>
//     <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
//         integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
//         crossorigin="anonymous"></script>
//     <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
//         integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
//         crossorigin="anonymous"></script>
// </body>

// </html>`

// writeToFile("../output/team.html", htmlFile).then(function () {
//     console.log("Successfully wrote to githubuser.html file");
//   });

};

function renderFile(){
    console.log("render file")
    console.log(staff)
};

addManager();

