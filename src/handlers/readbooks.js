const connection = require('../database/conifg/connection');
const {getUsersQuery , getBooksQuery} = require('../database/queries/getData')
const getUsers = (req,res) => {
    getUsersQuery().then(result => res.json(result.rows))
}

const readBook = (req,res) => {
    getBooksQuery().then(result => res.json(result.rows))
}


module.exports =  readBook;