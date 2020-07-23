const express = require('express');
const generateToken = require('./cypro');
const simpsons = require('./simpsons');
const app = express();

app.use('/simpsons', simpsons, (res, req) => {
  console.log(req)
  res.send({ authorization: 'coisa' })
});

app.listen(3000);
