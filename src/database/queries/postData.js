const connection = require('../conifg/connection');

const postUserQuery = (name, location) => {
    return connection.query(`INSERT INTO users (name, location) VALUES ($1, $2) RETURNING *;`, [name, location])
};


const postBookQuery = (name, location) => {
    return connection.query(`INSERT INTO users (name, location) VALUES ($1, $2) RETURNING *;`, [name, location])
};

const postBookingQuery = (name, location) => {
    return connection.query(`INSERT INTO users (name, location) VALUES ($1, $2) RETURNING *;`, [name, location])
};

module.exports = { postUserQuery,postBookQuery,postBookingQuery }