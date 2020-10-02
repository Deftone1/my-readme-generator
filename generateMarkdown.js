function generateMarkdown({
    title,
    description,
    installation,
    usage,
    contributing,
    testing,
    license,
    email
}) {
    // let licenseLink;
    // if (license = "Apache License") {
    //     licenseLink = "apacheURL"
    // } else if (license === "MIT") {


    //     licenseLink = "mitURL"
    // }

    return `
 # ${title}
 # Readme Generator
 ## Description 
  > ${description}
 ## Table of contents
  - [Description](#Description) 
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Contributors](#Contributors)
  - [License](#License)
  - [Test](#Test)
  - [Repository](#Repository)
 ## Installation
  > ${installation}
 ## Usage
  > ${usage}
 ## Contributors
  > ${contributing}
 ## License
    ${license}
 ## Test
  > ${testing}
 ## Repository
  - [Project Repository](undefined)`

};

module.exports = generateMarkdown;