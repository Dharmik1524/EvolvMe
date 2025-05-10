// models/index.js
const { Sequelize } = require("sequelize");
const UserModel = require("./User");

require("dotenv").config();

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

// Initialize models
const User = UserModel(sequelize);

// Sync models
sequelize
  .sync({ alter: true }) // You can use { force: true } for dev, but it drops tables
  .then(() => console.log("Database synced"))
  .catch((err) => console.error("Sync error:", err));

// Export models
module.exports = {
  sequelize,
  User,
};
