const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");
const User = require("./models/User");
const authRoutes = require("./routes/auth");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

// Sync DB & start server
sequelize.sync().then(() => {
  console.log("DB connected");
  app.listen(5000, () => console.log("Server running on port 5000"));
});
