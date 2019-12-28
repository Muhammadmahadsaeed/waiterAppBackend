const express = require('express');
const router = express.Router();

router.use('/users', require('./users.js'))
router.use('/resturants', require('./resturants.js'))

module.exports = router;