# Packages installed, not need install in this project because exist file package.json
- Only execute npm i for install these packages

npm init -y
npm install --save-dev nodemon
npm install --save express
npm install --save dotenv

# config

Config for user database and password

# controllers

only logic bussines

# models

Files for databases

# routes

Route for each final endpoint

# utils

Conexion database

# Files .env

For not upload password and users
Files .env is build for every person, when someone clone repository them need create files .env for create variables
-Server Configuration
SERVER_PORT = 8500;

-Database configuration


--npm start
--npm dev// every challange is reloading the project

# Backend
## Installed packages

```
  $ npm init -y
  -- every challange is reloading the project
  $ npm install --save-dev nodemon
  -- For create method post, get, put etc
  $ npm install --save express
  -- For create variables in file .env
  $ npm install --save dotenv
  -- Driver for connect to oracle database
  $ npm install --save oracledb
  -- For encrypt password 
  $ npm install --save bcryptjs
```
