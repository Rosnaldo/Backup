const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const authMiddleware = require('./middlewares/auth');

const db = 'mongodb://localhost:27017/jwt'; //coloque sua URL do MongoDB aqui
const port = process.env.PORT || 5000;

mongoose.connect(db, { useNewUrlParser: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.post('/products', authMiddleware, routes.createProduct);
apiRoutes.post('/users', routes.createUsers);
apiRoutes.post('/login', routes.login);

app.use('/api', apiRoutes);

app.listen(port);
console.log('conectado na porta ' + port);
