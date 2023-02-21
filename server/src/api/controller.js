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
    const { title, author, description } = req.body;

    pool.query(queries.addBook, [title, author.name, description], (error, result) => {
        if (error) throw error;
        res.status(201).send(`Book added with ID: ${result.insertId}`);
    });
    pool.query(queries.addAuthor, [author.name, author.profile_pic])
}

module.exports = {
    getBooks,
    getAuthors,
}