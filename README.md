# Create-Express-Boilerplate CLI

The `create-express-boilerplate` CLI tool offers a streamlined method for generating a new Express.js application, providing options for both a basic setup and a more structured MVC (Model-View-Controller) layout. This simplifies the initial setup process for your development projects.

## Features

- **Basic Express.js Application**: Quickly generate a basic Express.js application with minimal setup.
- **MVC Structure Option**: Add an MVC structure to your project for more complex applications, organizing your code into models, views, and controllers.
- **Simple to Use**: Generate a new project with just a single command.
- **MVC Structure Option with mongodb as the database**: Add an MVC structure to your project for more complex applications, organizing your code into models, views, and controllers and store user info with mongodb.

## Prerequisites

Ensure you have Node.js and npm installed on your machine before starting. This tool requires Node.js version 12.x or higher.

## Installation

You don't need to install this CLI tool globally, thanks to `npx`. Simply run the following command:

```bash
npx create-express-boilerplate <project-name> [--mvc]
```

Replace `<project-name>` with the name of your new project. The optional `--mvc` or `--mongodb` flag, if included, adds an MVC folder structure to your project. And when the mongodb flag is used the app is created with a mongodb database

## Usage

To generate a basic Express.js project:

```bash
npx create-express-boilerplate my-express-app
```

For an Express.js project with an MVC structure:

```bash
npx create-express-boilerplate my-express-app --mvc


For an Express.js project with an MVC structure and mongodb databse:

```bash
npx create-express-boilerplate my-express-app --mongodb
```

## Project Structure

Depending on the options selected, the tool generates the following structure:

- **Basic Project**:
  - `app.js`: The entry point for your Express application.

- **MVC Project**:
  - `app.js`: Application entry point.
  - `routes/`: Contains route handlers.
  - `controllers/`: Contains business logic.
  - `models/`: Contains database models.
  - `utils/`: Contains utility functions.

  - **Mongodb MVC Project**:
  -`src/` : contains all the app logic
  - `index.js`: Application entry point.
  - `routes/`: Contains route handlers.
  - `controllers/`: Contains business logic.
  - `models/`: Contains database models.
 

## Contributing

Contributions to `create-express-boilerplate` are welcome! To contribute:

1. Fork the repository and create your branch from `master`.
2. Make and test your changes.
3. Submit a pull request with a comprehensive description of your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
