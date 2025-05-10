// server/config/db.js
const { Sequelize } = require("sequelize");
require("dotenv").config();

// Setup connection with PostgreSQL using Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name
  process.env.DB_USER, // Database user
  process.env.DB_PASSWORD, // Database password
  {
    host: process.env.DB_HOST, // Host for PostgreSQL
    dialect: "postgres", // Database dialect
    logging: false, // Disable SQL query logging
  }
);

module.exports = sequelize;
