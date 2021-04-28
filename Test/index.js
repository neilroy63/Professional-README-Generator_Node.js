const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

function createMDfile(data) {
  // the following code defines the look/structure of the readme file
  return `

  # Project Title 
  ${data.project}

  # License
  ${data.license}

  # Description
  ${data.description}
  # Table of Contents

  # Installation
  ${data.installation}

  # Usage 
  ${data.usage}

  # License
  ${data.license}


  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  ${data.username}
  ${data.email}

  `;
}

inquirer
  .prompt([
    {
      type: "input",
      name: "project",
      message: "What is the tile of your project?",
    },
    {
      type: "list",
      message: "What is your preferred license?",
      name: "license",
      choices: ["GNU GENERAL PUBLIC", "MIT", "Apache", "ISC"],
    },
    {
      type: "input",
      name: "description",
      message:
        "Please Provide a short description explaining the what, why, and how of your project?",
    },
    {
      type: "input",
      name: "installation",
      message:
        "What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running?",
    },
    {
      type: "input",
      name: "usage",
      message:
        "Provide instructions and examples for use. Include screenshots as needed.",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section. If you followed tutorials, include links to those here as well.",
    },
    {
      type: "input",
      name: "tests",
      message:
        "Go the extra mile and write tests for your application. Then provide examples on how to run them here.",
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(" ").join("")}.json`;

    function createFile(filename, data) {
      return fs.writeFileSync(path.join(process.cwd(), filename), data);
    }
    createFile("readme.md", createMDfile(data));
  });

// true false condition to return one or other
// err ? console.log(err) : console.log("Success!", data)
//   );
// });

// path process.cwd()? a node command to help us process documentation

// {
//   type: "checkbox",
//   message: "What languages do you know?",
//   name: "stack",
//   choices: ["HTML", "CSS", "JavaScript", "MySQL"],
// },
