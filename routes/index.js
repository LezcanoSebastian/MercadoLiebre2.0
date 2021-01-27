var express = require('express');
var router = express.Router();

const indexController = require('../controller/indexController')
/* Home page */
router.get('/', indexController.index);

module.exports = router;
