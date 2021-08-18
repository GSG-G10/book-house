const connection = require('../conifg/connection');

const getUsers = () => {
    return connection.query(`SELECT * FROM users`);
};
const getBooks = () => {
    return connection.query(`SELECT * FROM books`);
};

module.exports = { getUsers , getBooks };   