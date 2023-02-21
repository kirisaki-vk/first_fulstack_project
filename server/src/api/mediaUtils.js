const fs = require('fs');
const path = require('path');

const sendMedia = (req, res ) => {
    const { filename } = req.params;
    const media = '../../bookCovers'; 
    const file = path.join(media, filename);
    fs.readFile(file, (err, data) => {
      if (err) {
        res.status(404).send('File not found');
      } else {
        res.set('Content-Type', 'image/png');
        res.send(data);
      }
    });
}

module.exports = {
    sendMedia,
}