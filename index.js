require("dotenv").config()
let app = require("./app")
let PORT =process.env.PORT || 500;
const mongoose = require('mongoose');



const connectedDB = async () =>{
  try{
    await mongoose.connect('mongodb://127.0.0.1:27017/productDB')
    console.log('server is connected');
  }catch(error){
    console.log('data is not connected');
    console.log(error);
  }
} 



app.listen(PORT, async ()=>{
    console.log(`my server is runing at http://localhost:${PORT}`);
    await connectedDB()
})
