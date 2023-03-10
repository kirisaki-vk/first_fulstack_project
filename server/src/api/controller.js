const pool = require('../../db')
const queries = require('./queries')
const getBooks = (req, res) => {
    pool.query(queries.allBooks, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}
const getAuthors = (req, res) => {
    pool.query(queries.allAuthors, (error, result) => {
        if (error) throw error;
        res.status(200).json(result.rows);
    })
}

const addBook = (req, res) => {
    res.send(req.body)
}

module.exports = {
    getBooks,
    getAuthors,
    addBook,
}