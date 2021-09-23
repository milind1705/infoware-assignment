const express = require("express");
const router = express.Router();
const admin = require ('../controller/adminController');

router.post('/signup', admin.signUp);
router.post('/login', admin.login);
router.get('/', admin.getUsers);

module.exports = router;
