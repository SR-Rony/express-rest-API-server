let users = require("../models/users.model")
const {v4:uuidv4} = require("uuid")


// users get requist
const getAllUsers = (req,res)=>{
    res.status(200).json(users)
}

// users post requist
const postUsers = (req,res)=>{
   let newUser = {
    id : uuidv4(),
    userName : req.body.userName,
    email : req.body.email,
   }
   users.push(newUser)
   res.status(200).json(newUser)
}

module.exports = {getAllUsers,postUsers}