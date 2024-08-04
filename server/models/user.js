const  mongoose = require("mongoose")

const User = mongoose.Schema({
    userName:String,
    password:String,
    email:{
        type:String,
        unique:true
    }
})

const UserModel = mongoose.model('user',User)
module.exports = UserModel