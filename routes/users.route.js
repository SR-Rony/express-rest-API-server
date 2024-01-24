const route = require("express").Router()
const { getAllUsers,postUsers } = require("../controllers/users.controller");

route.get("/",getAllUsers)
route.post("/",postUsers)

module.exports = route;