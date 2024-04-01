# Expressjs-Snippets CLI

The `expressjs-snippets` CLI tool provides a streamlined way to generate a new Express.js application with a basic or MVC (Model-View-Controller) folder structure, simplifying the initial setup for development projects.

## Features

- Generate a basic Express.js application with minimal setup.
- Option to create a structured MVC folder layout for larger projects.
- Easy to use with a single command.

## Prerequisites

Before you begin, ensure you have Node.js and npm installed on your machine. This tool requires Node.js version 12.x or higher.

## Installation

This CLI tool is available as an npm package. To use it, you don't need to install it globally thanks to `npx`. Just run the following command:

```bash
npx expressjs-snippets <project-name> [--mvc] [--port=<port-number>]
```

> Replace `<project-name>` with the name of your new project. The `--mvc` flag is optional and adds an MVC folder structure to your project. The `--port` option allows specifying the port on which the Express server will listen.

### Usage
To generate a basic Express.js project:

```
npx create-express-boilerplate my-express-app
```

To generate an Express.js project with an MVC structure:

```
npx create-express-boilerplate my-express-app --mvc
```
To specify the server port:

```
npx create-express-boilerplate my-express-app --port=4000
```

## Project Structure
The tool generates the following structure:

For a basic project:
- app.js - The entry point to your Express app.

For an MVC project:
- app.js
- routes/ - For your route handlers.
- controllers/ - For your business logic.
- models/ - For your database models.
- utils/ - For utility functions.


### Contributing
Contributions to the expressjs-snippet tool are welcome! Please consider the following steps if you wish to contribute:

1. Fork the repository and create your branch from master.
2. Make your changes and test them.
3. Issue a pull request with a detailed description of your changes.

### License
This project is licensed under the MIT License.

