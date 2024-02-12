const express = require("express")
const { getRegister } = require("../controllers/register.controller")
const { body, validationResult } = require('express-validator');
let route = express.Router()

// get register
route.post("/",body(["name","email","password"])
.trim().notEmpty(),(req,res,next)=>{
    const result = validationResult(req);
  if (result.isEmpty()) {
    const {name,email,password}=req.body
        let newUser ={
            name,
            email,
            password
        }
    return res.send(`Hello, ${newUser}!`);
  }
  res.send({ errors: result.array() });
  next()
},getRegister)

module.exports = route