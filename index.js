const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    name : {
        type : String,
        maxLength : "30",
    },
    email : {
        type : String,

    },
    password : {
        type : String,
        maxLength : "10"
    },
    role : {
        type : Number,
        default : 0
    },
    image:String,
    token:{
        type:String,
        type : Number
    },
    tokenExp:{
        type : Number

    }
});
const User = mongoose.model('User',useSchema);
module.exports = {User};