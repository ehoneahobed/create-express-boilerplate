#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Simple argument parsing
const args = process.argv.slice(2);
const projectName = args[0];
const port = args[1] ? args[1].split('=')[1] : '3000';

// Define the projectPath based on the current working directory and projectName
const projectPath = path.join(process.cwd(), projectName);

// Ensure the project directory exists
fs.mkdirSync(projectPath, { recursive: true });

// Initialize a new Node.js project
execSync('npm init -y', { stdio: 'inherit', cwd: projectPath });

// Define the path to the boilerplate directory
const boilerplatePath = path.join(__dirname, '../boilerplate');

// Copy the app.js boilerplate file to the new project directory
fs.copyFileSync(path.join(boilerplatePath, 'app.js'), path.join(projectPath, 'app.js'));

// Update the port in the copied app.js
const appJsPath = path.join(projectPath, 'app.js');
let appJsContents = fs.readFileSync(appJsPath, 'utf8');
appJsContents = appJsContents.replace('3000', port);
fs.writeFileSync(appJsPath, appJsContents);

// Install dependencies
execSync('npm install express', { stdio: 'inherit', cwd: projectPath });

console.log(`Project created at ${projectPath}`);
