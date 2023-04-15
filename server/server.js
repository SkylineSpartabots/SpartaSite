require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

//express app
const app = express();

// middleware - any code between receiving the request and sending a response
app.use(express.json());

//next function tells the program to continue
//prints out the path and the type of request to the console
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.listen(process.env.PORT, () => {
  console.log("server started on port " + process.env.PORT);
});
