
const express = require('express');
const router = express.Router();
const adminhandler = require('./handlers/admin')
const readBook = require('./handlers/readbooks')
const { addusers,addbook } = require('./handlers/addInDatatbase')
const deleteBook = require('./handlers/deleteIndatabase')

router.use('/admin', adminhandler);
router.use('/books', readBook);
router.use('/users', addusers);
router.use('/addbook', addbook);

router.use('/deleteBook', deleteBook);




module.exports = router;

