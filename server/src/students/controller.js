const pool = require('../../db')
const queries = require('./queries')
const getBooks = (req, res) => {
    pool.query(queries.allBooks , (error, result) => {
        if (error) console.log(error);
        res.status(200).json(result.rows);
    })
}


module.exports = {
    getBooks,
}