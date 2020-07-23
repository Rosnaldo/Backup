const express = require('express');
const router = express.Router();
const authMiddleware = require('./authmiddleware');

router.use(authMiddleware);

router.get('/', function (req, res) {
  res.send('Hello World!');
});

router.get('/homer', function (req, res) {
  res.send('Hello Homer!');
});

module.exports = router;