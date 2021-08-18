const connection = require('../conifg/connection');


const deleteBookQuery = (id) => {
    return connection.query(`DELETE FROM books WHERE id=${id}`);
};


module.exports = deleteBookQuery;
