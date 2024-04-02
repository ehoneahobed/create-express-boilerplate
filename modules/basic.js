const fs = require('fs-extra');
const path = require('path');

async function addBasicStructure(projectPath) {
  // Ensure the project directory exists
  await fs.ensureDir(projectPath);

  // Create a simple app.js file
  const content = `
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`App listening on port \${port}\`);
});
  `;
  await fs.writeFile(path.join(projectPath, 'app.js'), content.trim());
  console.log('Basic Express.js project setup completed.');
}

module.exports = addBasicStructure;
