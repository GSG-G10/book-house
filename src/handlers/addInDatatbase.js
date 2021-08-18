require("env2")("config.env");
const path = require("path");
const app = require("../server");
const port = process.env.PORT || 4000;
const { postUserQuery,postBookQuery,postBookingQuery } = require('../database/queries/postData')



const addusers = (req,res) => {
    postUser(req.body.name,req.body.location)
    res.send('add work')
}



module.exports = addusers