//FS to write the html file
const fs = require("fs");
// Inquirer to get user responses
const inquirer = require("inquirer");

//links to constructor functions
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//html template to dynmaically render the page
const generatePage = require("./src/page-template");
//importing write and copyfile functions to write the html template and apply the css
const { writeFile, copyFile } = require("./generate-site");

//team array to store the user responses in
const team = [];

//prompt user to input the Manager details
function managerPrompt() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter an employee's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "please add the 'Manager' role to the profile",
        choices: ["Manager"],
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their ID number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an employee's ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please enter their office number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an office number");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newManager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.role,
        answers.officeNumber
      );
      team.push(newManager);
      addTeam();
    });
}

//prompt Manager to add an Engineer or Intern
const addTeam = () => {
  console.log(`
  ======================
  Add a New Team Member
  ======================
  `);
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "please select their role",
        choices: ["Engineer", "Intern"],
      },
    ])
    .then((roleChoice) => {
      if (roleChoice.role === "Engineer") {
        addEngineer(roleChoice);
      }
      if (roleChoice.role === "Intern") {
        addIntern(roleChoice);
      }
    });
};

//questions for the engineer data
const addEngineer = (roleChoice) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter an employee's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their ID number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an employee's ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "github",
        message: "Please enter Engineer's GitHub username",
        validate: (githubInput) => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter Engineer's GitHub username");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newEngineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        roleChoice.role,
        answers.github
      );
      team.push(newEngineer);
      addNewMember();
    });
};

//questions for the Intern data
const addIntern = (roleChoice) => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please enter an employee's name",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter an employee's name");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "Please enter their ID number",
        validate: (IDInput) => {
          if (IDInput) {
            return true;
          } else {
            console.log("Please enter an employee's ID number");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "Please enter their email address",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "Please enter Intern's school name",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter Intern's school name");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const newInern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        roleChoice.role,
        answers.school
      );
      team.push(newInern);
      addNewMember();
    });
};

//prompt user to either add another team member or render write the html and render the page
const addNewMember = () => {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "confirmAddMember",
        message: "Would you like to enter another team member?",
        default: false,
      },
    ])
    .then((response) => {
      if (response.confirmAddMember) {
        addTeam(team);
      }
      if (!response.confirmAddMember) {
        console.log("Team array after all questions answered", team);
        let pageHTML = generatePage(team);
        writeFile(pageHTML)
          .then((writeFileResponse) => {
            console.log(writeFileResponse);
            return copyFile();
          })
          .then((copyFileResponse) => {
            console.log(copyFileResponse);
          });
      }
    });
};

managerPrompt();
