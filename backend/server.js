require("dotenv").config();
const express = require("express");
const body_parser = require("body-parser");
const server = express();
const cors = require("cors");
const mongoose = require("mongoose");
const DB_CONNECTION = require("./Config/dbConfig");
const StudentsRouter = require("./Router/studentsRouter");

// DB Config
DB_CONNECTION();

// CORS-enabled
server.use(cors());

//Body Parser middleware
server.use(body_parser.urlencoded({ extended: false }));
server.use(body_parser.json());

server.use((request, response, next) => {
  console.log(request.url, request.method);
  next();
});

server.get("/", (requset, response, next) => {
  response.send("server is run successfly");
  next();
});

server.use("/api", StudentsRouter);

const port = process.env.port;

server.listen(port, () => {
  console.log("server is lisent");
});
