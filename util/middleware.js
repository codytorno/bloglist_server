const logger = require("./logger");

// logs data about each request to the website
const requestLogger = (request, response, next) => {
  logger.info("Method: ", request.method);
  logger.info("Path:   ", request.path);
  logger.info("Body:   ", request.body);
  next();
};

const errorHandler = (error, request, response, next) => {
  if (error.Name === "CastError") {
    response.status(400).send({ error: "malformatted id" });
  }
  if (error.Name === "ValidationError") {
    response.status(400).json({ error: error.message });
  }
  next(error);
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

module.exports = { requestLogger, errorHandler, unknownEndpoint };
