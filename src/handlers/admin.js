const path = require("path");

const adminHandler = (req,res) => {
    res.sendFile(path.join(__dirname,'/..','/..','public','admin.html'))
}

module.exports = adminHandler