// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None'){
    return `There is no licence`
  } else
  return `![License: ${license}](https://img.shields.io/badge/license-${license}-blue)`;
};
renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None'){
    return ``
  } else
  return `[${license}](https://spdx.org/licenses/${license}.html)`;
};
renderLicenseLink();
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license){return 'There is no license'}
  else if (license){return `
  This application is covered under the ${renderLicenseLink(license)} license`}
}
renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.name}

${renderLicenseBadge(data.license)}
## Description:
<blockquote>
<p>${data.description}</p>
</blockquote>

## Table of Contents
- [Description](#description)
- [Instructions](#instructions)
- [Contributions](#contribution)
- [Test Instructions](#testing)
- [Contact](#questions)
- [liscence](#license)

## Instructions:
<blockquote>
${data.instructions}
</blockquote>

## Contribution:
<blockquote>
${data.contribution}
</blockquote>

## Testing:
<blockquote>
${data.test}
</blockquote>

## Questions:
[Github](https://github.com/${data.github})
<br>
Email: (${data.email})


## License:
${renderLicenseSection(data.license)}
<br>
`;
};

module.exports = generateMarkdown;
