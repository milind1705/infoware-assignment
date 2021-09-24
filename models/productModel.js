const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    discription:{
        type:String,
        require:true
    },
    price:{
        type:Number,
        require:true
    }
    
}, {timestamps : true})

module.exports = mongoose.model("Product", productSchema)