const express = require("express");
const cors = require ("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/users.route");
const productRoute =require("./routes/product.route")
let app = express()

app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// home routes
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
});

// user route 
app.use("/users",userRoute)
app.use("/product",productRoute)

// error rout 404

app.use((req,res,next)=>{
    res.status(404)
    res.send("<h1>404 pages is not found</h1>")
});

// server error
app.use((error,req,res,next)=>{
    res.status(500)
    res.send("<h1>404 pages is not found</h1>")
});





module.exports = app;