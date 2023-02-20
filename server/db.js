const Pool = require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password: "deadream",
    database: "ebook",
    port: 5432,
    host: "localhost"
});

module.exports = pool;