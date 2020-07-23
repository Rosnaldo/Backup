const fs = require('fs');
const path = require('path');

const readFolder = (folderPath, callback) => {
  fs.readdir(folderPath, (err, fileNames) => {
    if (err) return callback(err);

    const result = {};
    let errorReadingOtherFile = false;

    for (const fileName of fileNames) {
      fs.readFile(path.join(folderPath, fileName), 'utf-8', (err, content) => {
        if (errorReadingOtherFile) return;

        if (err) {
          errorReadingOtherFile = true;
          return callback(err);
        }

        result[fileName] = content;

        const isLastFile = Object.entries(result).length === fileNames.length;

        if (isLastFile) {
          callback(undefined, result);
        }
      });
    }
  });
};

module.exports = readFolder;
