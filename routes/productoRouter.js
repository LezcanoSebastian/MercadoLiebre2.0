var express = require('express');
var router = express.Router();
const productsController = require('../controller/productoController')
/* GET home page. */
router.get('/detail/:id/:category', productsController.detail)

module.exports = router;
