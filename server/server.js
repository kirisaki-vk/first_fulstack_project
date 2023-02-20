const express = require('express');
const booksRoutes = require('./src/students/routes');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/api/books", booksRoutes);
app.listen(port, () => console.log(`Backend started at port ${port}`))