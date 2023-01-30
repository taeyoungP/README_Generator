// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

/*['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 
'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0',
'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1',
'Mozilla Public License 2.0', 'The Unlicense']*/
function renderLicenseBadge(license) {
  if(license === 'Apache License 2.0'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]';
  } else if(license === 'GNU General Public License v3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]';
  } else if(license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if(license === 'BSD 2-Clause "Simplified" License'){
    return '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]';
  } else if(license === 'BSD 3-Clause "New" or "Revised" License'){
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]';
  } else if(license === 'Eclipse Public License 1.0'){
    return '[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)]';
  } else if(license === 'GNU Affero General Public License v3.0'){
    return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]';
  } else if(license === 'GNU General Public License v2.0'){
    return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]';
  } else if(license === 'GNU Lesser General Public License v3.0'){
    return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)]';
  } else if(license === 'Mozilla Public License 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
  } else if(license === 'The Unlicense'){ //Unlicense, return no badge but empty string
    return '';
  } else {
    return;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'Apache License 2.0'){
    return '(https://opensource.org/licenses/Apache-2.0)';
  } else if(license === 'GNU General Public License v3.0'){ //GNU GPL v3
    return '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if(license === 'MIT License'){
    return '(https://opensource.org/licenses/MIT)';
  } else if(license === 'BSD 2-Clause "Simplified" License'){
    return '(https://opensource.org/licenses/BSD-2-Clause)';
  } else if(license === 'BSD 3-Clause "New" or "Revised" License'){
    return '(https://opensource.org/licenses/BSD-3-Clause)';
  } else if(license === 'Eclipse Public License 1.0'){
    return '(https://opensource.org/licenses/EPL-1.0)';
  } else if(license === 'GNU Affero General Public License v3.0'){ //GNU AGPL v3
    return '(https://www.gnu.org/licenses/agpl-3.0)';
  } else if(license === 'GNU General Public License v2.0'){ //GNU GPL v2
    return '(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)';
  } else if(license === 'GNU Lesser General Public License v3.0'){ //GNU LGPL v3
    return '(https://www.gnu.org/licenses/lgpl-3.0)';
  } else if(license === 'Mozilla Public License 2.0'){
    return '(https://opensource.org/licenses/MPL-2.0)';
  } else if(license === 'The Unlicense'){ //Unlicense, return no link but empty string
    return '';
  } else {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseLink = renderLicenseLink(license);
  let licenseBadge = renderLicenseBadge(license);
  return licenseBadge+licenseLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseSection(data.license);
  let ins1 = '```md';
  let ins2 = '```';

  return `
  # ${data.title}

  ## Table of Contents
   * [Description](#description)
   * [Installation Instruction](#installation-instruction)
   * [Usage Information](#usage-information)
   * [Contribution Guidelines](#contribution-guidelines)
   * [Test Instruction](#test-instruction)
   * [License](#license)
   * [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation Instruction
  ${ins1}
  ${data.installation}
  ${ins2}

  ## Usage Information
  ${data.usage}
  
  ## Contribution Guidelines
  ${data.contribution_guide}
  
  ## Test Instruction
  How to run the test:
  ${ins1}
  ${data.test_ins}
  ${ins2}
  
  ## License
  ${data.license}
  ${license}

  ## Questions?
  If you have any questions about this project, please email to ${data.email}.

  GitHub: https://github.com/${data.github}

  ---
`;
}

module.exports = { generateMarkdown };
