const fs = require('fs-extra');
const path = require('path');

async function addMVCStructure(projectPath) {
  const templatePath = path.join(__dirname, '../templates/mvc');
  try {
    await fs.copy(templatePath, projectPath);
    console.log('MVC structure added successfully.');
  } catch (error) {
    console.error('Failed to add MVC structure:', error);
  }
}

module.exports = addMVCStructure;
