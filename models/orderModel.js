const mongoose = require('mongoose');
const adminSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        require:true
    },
    quantity:{
        type:Number,
        require:true,
        default: 1
    },
    Totalprice:{
        type:Number,
        require:true
    }
}, {timestamps : true})

module.exports = mongoose.model("Order", adminSchema)