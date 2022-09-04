const express = require('express');
const router = express.Router();
console.log("Router Loaded!");

const homepageControllers = require('../controllers/homepageController');

router.use('/orders',require('./orders'));
router.get('/',homepageControllers.home);

module.exports = router;