const express = require('express');
const Routes = require('./src/api/routes');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/api", Routes);

app.listen(port, () => console.log(`Backend started at port ${port}`))