
const express = require('express');
const router = express.Router();

const adminhandler = require('./handlers/admin')


router.use('/admin', adminhandler);

module.exports = router;

