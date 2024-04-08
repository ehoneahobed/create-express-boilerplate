const fs = require('fs-extra');
const path = require('path');

async function addMongoDbMVCStructure(projectPath) {
  const templatePath = path.join(__dirname, '../templates/mongodb');
  try {
    await fs.copy(templatePath, projectPath);
    console.log('Mongodb mvc structure added successfully.');
  } catch (error) {
    console.error('Failed to add Mongodb MVC structure:', error);
  }
}

module.exports = addMongoDbMVCStructure;
