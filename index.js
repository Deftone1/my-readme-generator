const util = require("util");
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown")

const writeFile = util.promisify(fs.writeFile);
const mkdir = util.promisify(fs.mkdir);


// QUESTIONS FOR USER 
async function userInput() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title"
        },

        {
            type: 'input',
            message: "Please describe your project.",
            name: 'description'
        },
        {
            type: 'input',
            message: "What steps were taken for the installation of your project?",
            name: 'installation'
        },
        {
            type: 'input',
            message: "Please include some examples of usage in your project.",
            name: 'usage'
        },
        {
            type: 'input',
            message: "How has your project been developed for additional programmer contributions?",
            name: 'contributing'
        },
        {
            type: "list",
            message: "Choose a license for your project.",
            name: "license",
            choices: [
                "Apache License",
                "MIT License",
                "Mozilla Public License",
                "Unlicensed"
            ]
        },
        {
            type: "input",
            message: "Please provide any information in regards to the testing of your project.",
            name: "testing"
        },
        {
            type: "input",
            message: "What is the your GitHub link?",
            name: "github"
        },
        {
            type: "input",
            message: "Please include your e-mail.",
            name: "email"
        },


    ]);
};

// CONFIRMS SUCCESSFUL RUN OF GENERATED README
async function init() {
    try {
        const data = await userInput();
        const mdString = generateMarkdown(data);
        await makeOutputFile(mdString);
        console.log("Successfully created README");
    } catch (error) {
        console.log(error);
    }
}

init();

// SENDS TEXT TO MARKDOWN FILE PAGE TO FORMAT
async function makeOutputFile(mdString) {
    const outputPath = "generated-readme";
    const readmePath = "generated-readme/README.md";
    if (!fs.existsSync(outputPath)) {
        await mkdir(outputPath);
    }
    await writeFile(readmePath, mdString);
};





