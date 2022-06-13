const path = require("path");
const express = require("express");
const app = express();
const basicRoutes = require("./routes/routes");

app.use("/", basicRoutes);

module.exports = app;
