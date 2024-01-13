require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");

//express app
const app = express();

// middleware - any code between receiving the request and sending a response
app.use(express.json());

//next function tells the program to continue
//prints out the path and the type of request to the console
app.use((req, _res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/user", userRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server started on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// app.listen(process.env.PORT, () => {
//   console.log("server started on port " + process.env.PORT);
// });
