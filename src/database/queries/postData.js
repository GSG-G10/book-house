const connection = require('../conifg/connection');

const postUserQuery = (name, location) => {
    return connection.query(`INSERT INTO users (name, location) VALUES ($1, $2) RETURNING *;`, [name, location])
};

const postBookQuery = (book_name, book_image,author,state) => {
    return connection.query(`INSERT INTO books (book_name, book_image,author,state) VALUES ($1, $2,$3, $4) RETURNING *;`, [book_name, book_image,author,state])
};
const postBookingQuery = (book_name, book_image,author,state) => {
    return connection.query(`INSERT INTO books (book_name, book_image,author,state) VALUES ($1, $2,$3, $4) RETURNING *;`, [book_name, book_image,author,state])
};


module.exports = { postUserQuery,postBookQuery,postBookingQuery }