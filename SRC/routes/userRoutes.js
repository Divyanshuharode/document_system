const express = require("express");
const userRoute = express.Router();


const { getUsers } = require("../controllers/userController")

userRoute.get("/api/users", getUsers);

module.exports = userRoute;