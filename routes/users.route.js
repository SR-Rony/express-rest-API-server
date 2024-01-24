const route = require("express").Router()
const { getAllUsers } = require("../controllers/users.controller");

route.get("/",getAllUsers)

module.exports = route;