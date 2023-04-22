const express = require("express");
const configureRoutes = require("./controllers");
const { handleRequest, handleError } = require("./middlewares");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(handleRequest);
app.use(handleError);

configureRoutes(app);

module.exports = app;
