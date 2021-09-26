const express = require("express");
const router = express.Router();
const order = require ('../controller/orderController');
const checkAuth = require('../middleware/checkAuth');

router.post('/', order.createOrder);
// router.get('/', product.getAll_product);
// router.get('/:id', product.get_product_byId);
// router.put('/:id', product.update_product);
// router.delete('/:id', product.delete_product_byId)

module.exports = router;