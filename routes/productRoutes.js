const express = require("express");
const router = express.Router();
const product = require ('../controller/productController');
const checkAdmin = require('../middleware/checkadmin');


router.post('/', checkAdmin,  product.createProduct);
router.get('/', product.getAll_product);
router.get('/:id', product.get_product_byId);
router.put('/:id', checkAdmin, product.update_product);
router.delete('/:id',checkAdmin, product.delete_product_byId)

module.exports = router;