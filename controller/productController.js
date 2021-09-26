const Product = require("../models/productModel");

module.exports.createProduct = (req, res) => {
  const name = req.body.name;
  Product.findOne({name:name}).then((product) => {
    if(product){
      return res.status.json("This product alredy available in databse")
    } 
  
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "Something went wrong",
      });
    });
  })
};

module.exports.getAll_product = (req, res) => {
  Product.find({})
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "Something went wrong",
      });
    });
};

module.exports.get_product_byId = (req, res) => {
  Product.findById({ _id: req.params.id })
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "Something went wrong",
      });
    });
};

module.exports.update_product = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Product.findById({ _id: req.params.id })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        return res.status(400).json({
          message: err.message || "Something went wrong",
        });
      });
  });
};

module.exports.delete_product_byId = (req, res) => {
  Product.findByIdAndDelete({ _id: req.params.id })
    .then((data) => {
      return res.status(200).json("Product Successfully deleted");
    })
    .catch((err) => {
      return res.status(400).json({
        message: err.message || "Something went wrong",
      });
    });
};
