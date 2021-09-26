const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required:true
    },
    product:{
        //type:String,
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity:{
        type:Number,
        required:true,
        default: 1
    },
    Totalprice:{
        type:Number,
        
    }
}, {timestamps : true})

module.exports = mongoose.model("Order", adminSchema)