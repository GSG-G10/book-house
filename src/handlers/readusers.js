const connection = require('../database/conifg/connection');
const {getUsersQuery , getBooksQuery} = require('../database/queries/getData')
const readUsers = (req,res) => {
    getUsersQuery().then(result => res.json(result.rows))
}

module.exports = readUsers  ;