const User = require('../models/userModel');
const Product = require('../models/productModel');
const Order = require('../models/orderModel');

module.exports.createOrder = (req, res) => {
     const productName = req.query.name;
      Product.find({name : productName}).then((data) =>{
         const product = data;
         const productPrice = { price : product.price}

        return res.send(productPrice)
         
        });
     //const product = productID.name
    // const quantity = req.body.quantity;
    // const amount = quantity * product.price;

    // const newOrder = new Order({user: user.name, product : productName, quantity: quantity, toatlPrice:amount});

    // newOrder
    // .save()
    // .then((data) => {
    //     return res.status(200).json(data)
    // })
    // .catch((err) => {
    //     return res.status(400).json(err)
    // })

}