const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());

app.get('/search/:query',(req, res) => {
    let value = req.params.query;
    res.send(value);
    res.end;
});

app.listen(port, () => { console.log('Server is listening on port ' + port);})
