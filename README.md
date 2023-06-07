# HR - Management Sample API using AdonisJS

HR-Management is a backend project for Technical Test Back End with Adonisjs.

## Getting Started
### Prerequisite

Make sure you have installed all of the following prerequisites on your development machine:

1. Node.js - [Download and Install Node](https://nodejs.org/en/download/) and the npm package manager.
2. Yarn - [Download and Install Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

### Installing


1. Make sure you got the Prerequisites Installed on your local computer.
2. Download file .zip or clone via github https://github.com/vinsapr/management-web
3. Open terminal in your project directory and execute this `yarn` command in the current directory
    ```
    yarn
    ```
4. Crate file `.env` then copy the value from file `.env.example` 
5. After the installation complete, execute this command below to start the project in your local machine
    ```
    yarn dev
    ```
6. HR-Management is running on port `PORT` value where you set the `.env` file. Example:
    ```
    PORT=3333
    ```
    Then the project will running on port `3333`
7. Done, now you can see view build in Adonis web.


## DB Migration

1. Make sure you already connect with mysql and have database with name `management`
2. Execute this command below to run the migration
    ```
     yarn run-migration
    ```
3. If you want to running the seeder to make dummy data, execute this command:
    ```
    yarn run-seed
    ```

## Built With

- [Node](https://nodejs.org/en/) - Javascript Runtime Environtment
- [Yarn](https://classic.yarnpkg.com/en/) - Package Manager
- [AdonisJS](https://adonisjs.com/) - Nodejs framework
- MySQL
