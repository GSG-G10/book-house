const connection = require('../database/conifg/connection');
const deleteBookQuery = require('../database/queries/deleteData');

const deleteBook = (req,res) => {
    deleteBookQuery(req.body.id)
    res.redirect('/admin')
}


module.exports =  deleteBook;