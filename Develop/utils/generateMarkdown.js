const fetch = require("node-fetch");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadges(username, repo, license) {
  let ret = ""
  ret += `
![Analysis](https://img.shields.io/github/languages/top/${username}/${repo})`
  if (license) {
    ret += `
![License](https://img.shields.io/github/license/${username}/${repo})
  `
  }
  return ret
}

const generateLicenseSection = async (github, repo) => {
  let ret = ""
  await fetch("https://api.github.com/repos/" + github + "/" + repo)
    .then(async response => {
      if (response.ok) {
        await response.json()
          .then(async data => {
            ret += await data.license.name
          });
      };
    });
    return ret;
}

// TODO: Create a function to generate markdown for README
function tableOContents(data) {
  const content = (Object.entries(data))
  let ret = "";
  let i = 2;
  ret += `
## Table of Contents`
  while (content[i][0] != 'github') {
    let header = content[i][0].charAt(0).toUpperCase() + content[i][0].slice(1);
    ret += `
* [${header}](#${content[i][0]})`
    i++;
  }
  ret += `
* [Questions](#questions)
`
  return ret;
}

module.exports = generateMarkdown;