const User = require("../models/userModel");
const Product = require("../models/productModel");
const Order = require("../models/orderModel");

module.exports.createOrder = (req, res) => {
  const productId = req.query.id;
  Product.findOne({ _id: productId }).then((data) => {
    const product = data;
    let productName = product.name;
    let productPrice = product.price;
    let quantity = req.body.quantity;
    let totalPrice = productPrice * quantity;

    let neworder = new Order({
      productName,
      productPrice,
      quantity,
      totalPrice,
    });
    neworder
      .save()
      .then((data) => {
        return res.send(data);
      })
      .catch((err) => {
        return res.send(err);
      });
  });
};
