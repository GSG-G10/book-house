const connection = require('../conifg/connection');

const getUsersQuery = () => {
    return connection.query(`SELECT * FROM users`);
};
const getBooksQuery = () => {
    return connection.query(`SELECT * FROM books`);
};



module.exports = { getUsersQuery , getBooksQuery };   