const express = require("express");
const router = express.Router();
const product = require ('../controller/productController');

router.post('/', product.createProduct);
router.get('/', product.getAll_product);
router.get('/:id', product.get_product_byId);
router.put('/:id', product.update_product);
router.delete('/:id', product.delete_product_byId)

module.exports = router;