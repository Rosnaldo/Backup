const multer = require('multer');
const express = require('express');

const app = express();

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_req, file, callback) => callback(null, file.originalname),
});

const upload = multer({ storage });

app.post('/files/upload', upload.single('file'), (req, res) => {
  res.status(200).json(req.file);
});

app.use((err, _req, res, _next) => {
  res.status(500).json(err);
});

app.listen(3000, () => console.log('Ouvindo na porta 3000'));
