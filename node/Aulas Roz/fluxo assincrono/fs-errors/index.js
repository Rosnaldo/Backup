const fs = require('fs');

const getBetterMessage = (err) => {
  const ERROR_MESSAGES = {
    ENOENT: (err) => `Arquivo não encontrado: ${err.path}`,
    EACCES: (err) => `Sem permissões suficientes: ${err.path}`,
  };

  const message = ERROR_MESSAGES[err.code];
  if (message) return message(err);

  return err.message;
};

fs.readFile('./myfile.txt', 'utf-8', (err, content) => {
  if (err) return console.error(getBetterMessage(err));

  console.log(`Conteúdo do arquivo: ${content}`);
});
