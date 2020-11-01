const express = require('express');
const bodyParser = require('body-parser');

const controllers = require('./controllers');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/products', controllers.product);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Algo deu errado' });
});

app.listen(3000, () => {
  console.log('App ouvindo a porta 3000!');
});