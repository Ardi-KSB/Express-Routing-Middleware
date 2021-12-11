const express = require("express");
const route = express.Router();

const routeUser = require("./userRouter");
const routeBook = require("./bookRouter")

route.get("/", (req, res) => {
  res.json("This is Home Page");
});

route.use("/user", routeUser);

route.use("/book", routeBook)

module.exports = route
