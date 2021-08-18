require("env2")("config.env");
const path = require("path");
const app = require("../server");
const port = process.env.PORT || 4000;
const { postUserQuery,postBookQuery,postBookingQuery } = require('../database/queries/postData')



const addusers = (req,res) => {
    postUserQuery(req.body.name,req.body.location)
    res.send('ok')
}


const addbook = (req,res) => {
    postBookQuery(req.body.book_name,req.body.book_image,req.body.author,req.body.state)
    res.redirect('/admin')
}

module.exports = { addusers,addbook }