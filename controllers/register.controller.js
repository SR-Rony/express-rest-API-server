
// get register
const getRegister = async (req,res)=>{
    res.send("i am register pages")
    try{
        const {name,email,password}=req.body
        let newUser ={
            name,
            email,
            password
        }
        res.send(newUser)
    }catch(error){
       res.send("server error")
    }

}


module.exports = {getRegister}