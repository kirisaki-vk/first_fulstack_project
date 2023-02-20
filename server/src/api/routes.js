const { Router } = require('express');
const controller = require('./controller');
const router = Router();

router.get("/books", controller.getBooks);
router.get("/authors", controller.getAuthors);

module.exports = router;