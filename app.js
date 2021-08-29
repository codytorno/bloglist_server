const config = require("./util/config");
const logger = require("./util/logger");
const cors = require("cors");
const middleware = require("./util/middleware");
const express = require("express");
const app = express();
const blogPostRouter = require("./controllers/blogPosts");
const mongoose = require("mongoose");

// connect to mongodb
logger.info("Connecting to Database using: ", config.URI);
mongoose
  .connect(config.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => logger.info("Connected to Database!"))
  .catch(error => logger.error("Error Connecting to database", error.message));

// use statements
app.use(express.static("build")); // show frontend at / route
app.use(express.json()); // converts objects to json
app.use(cors());
app.use(middleware.requestLogger); // logs all requests to console
app.use("/api/blogposts/", blogPostRouter); // handles all routes involving blog post data from mongodb
app.use(middleware.unknownEndpoint); // handles all unknown requests
app.use(middleware.errorHandler); // looks for specific errors and logs them
module.exports = app;
