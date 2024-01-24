const {v4:uuidv4} = require("uuid")


const users = [
    {
        id : uuidv4(),
        userName : "SR",
        email : "sr@gmail.com"
    },
    {
        id : uuidv4(),
        userName : "sagor",
        email : "sagor@gmail.com"
    }
]

module.exports = users