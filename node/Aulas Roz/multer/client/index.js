const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');

const stream = fs.createReadStream('./teste.txt');

const form = new FormData();
form.append('file', stream);

const headers = form.getHeaders();

console.log(headers);

axios
  .post('http://localhost:3000/files/upload', form, {
    headers,
  })
  .then((response) => console.log(response.data))
  .catch((err) => console.error(err));
