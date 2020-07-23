// const path = require('path');
// const readFolder = require('./read-folder-promise');

// const FOLDER_PATH = path.resolve(__dirname, './myfiles');

// // readFolder(FOLDER_PATH, (err, result) => {
// //   if (err) return console.error(err.message);

// //   console.log(`Conteúdo dos arquivos: ${JSON.stringify(result)}`);
// // });

// readFolder(FOLDER_PATH)
//   .then(console.log);

const fs = require('fs');

function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/myfiles/file1.txt', callback);
}

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});