const express = require('express');
const bodyParser = require('body-parser');

const socketIoServer = require('http').createServer();
const io = require('socket.io')(socketIoServer);

const app = express();

app.use(bodyParser.json());

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} conectado!`);
  socket.emit('message', 'Boas vindas ao servidor!');

  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} desconectado`);
  });
});

app.post('/notify', (req, res) => {
  const { title, message } = req.body;

  if (!title || !message) {
    return res.status(422).json({ message: 'Missing message or title' });
  }

  io.emit('notification', { title, message });

  res.status(200).json({ message: 'Notification emitted' });
});

app.listen(3000);
console.log('Express ouvindo na porta 3000');

socketIoServer.listen(4555);
console.log('Socket.io ouvindo na porta 4555');
