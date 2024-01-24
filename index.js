let app = require("./app")
let PORT = 400;


app.listen(PORT, ()=>{
    console.log(`my server is runing at http://localhost:${PORT}`);
})