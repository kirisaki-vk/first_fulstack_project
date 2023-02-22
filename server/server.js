const express = require('express');
const Routes = require('./src/api/routes');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

app.use("/res",express.static(path.join(__dirname, 'res')));
app.use("/api", Routes);

app.listen(port, () => console.log(`Backend started at port ${port}`))