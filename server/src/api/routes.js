const { Router } = require('express');
const controller = require('./controller');
const mediaQueries = require('./media.js');
const router = Router();

router.get("/books", controller.getBooks);
router.get("/authors", controller.getAuthors);
//router.use("/media", mediaQueries) // Still brokren endpoint
module.exports = router;