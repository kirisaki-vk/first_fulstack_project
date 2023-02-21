const { Router } = require('express');
const mediaUtils = require('./mediaUtils');
const media = Router();

media.get("/bookCover/:book", mediaUtils.sendMedia);