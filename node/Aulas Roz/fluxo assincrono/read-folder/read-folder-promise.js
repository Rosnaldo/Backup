const fs = require('fs').promises;
const path = require('path');

const readFolder = (folderPath) => {
  return fs.readdir(folderPath).then((fileNames) => {
    // const result = {};
    // let errorReadingOtherFile = false;

    const filePromises = fileNames
      .map((fileName) =>
        fs.readFile(path.join(folderPath, fileName), 'utf-8')
          .then((content) => ({ name: fileName, content }))
      );

    return Promise.all(filePromises).then((results) =>
      results.reduce((result, file) => {
        return { ...result, [file.name]: file.content };
      }, {})
    );
  });
};

module.exports = readFolder;
