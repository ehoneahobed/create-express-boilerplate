#!/usr/bin/env node

const path = require('path');
const { program } = require('commander');
const addMVCStructure = require('../modules/mvc');
const addBasicStructure = require('../modules/basic');

program
  .name('create-express-boilerplate')
  .argument('<project-name>', 'Name of the project directory to create')
  .option('--mvc', 'Add MVC structure to the project')
  .action(async (projectName, options) => {
    const projectPath = path.join(process.cwd(), projectName);
    console.log(`Creating a new Express.js project in ${projectPath}`);

    if (options.mvc) {
      await addMVCStructure(projectPath);
      console.log('MVC structure added.');
    } else {
      // Logic for basic project structure
      await addBasicStructure(projectPath);
    }

    console.log('Project setup complete.');
  });

program.parse(process.argv);
