const connection = require('../database/conifg/connection');

const getDataQuery = () => {
    return connection.query(`SELECT * FROM books`);
};

module.exports = getDataQuery;