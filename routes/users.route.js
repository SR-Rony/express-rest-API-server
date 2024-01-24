const route = require("express").Router()
const { getAllUsers,postUsers, putUsers,deleteUsers } = require("../controllers/users.controller");

route.get("/",getAllUsers)
route.post("/",postUsers)
route.put("/:id",putUsers)
route.delete("/:id",deleteUsers)

module.exports = route;