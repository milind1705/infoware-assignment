const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true,
        minlength: 5
    },
}, {timestamps : true})

module.exports = mongoose.model("Admin", adminSchema)