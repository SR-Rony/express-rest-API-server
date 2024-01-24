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
   res.status(201).json(newUser)
}

// users put requist
const putUsers = (req,res)=>{
    let userId = req.params.id
    users.filter((user)=> user.id==userId)
    .map((allUser)=>{
        allUser.userName = userName;
        allUser.email = email
    });
    res.status(200).json({message:"user update"})
 }

 // users delete requist
const deleteUsers = (req,res)=>{
    let userId = req.params.id
   let filtterUser= users.filter((user)=> user.id!=userId)

   users = filtterUser
    
    res.status(200).json({message:"user delete"})
 }

module.exports = {getAllUsers,postUsers,putUsers,deleteUsers}