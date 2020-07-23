const fs = require('fs').promises;
const path = require('path');

const readFolder = async (folderPath) => {
  const fileNames = await fs.readdir(folderPath);

  const result = {};
  let errorReadingOtherFile = false;

  const filePromises = fileNames.map((fileName) => {
    return fs
      .readFile(path.join(folderPath, fileName), 'utf-8')
      .then((content) => ({ name: fileName, content }));
  });

  const results = await Promise.all(filePromises);

  return results.reduce((result, file) => {
    return { ...result, [file.name]: file.content };
  }, {});
};

module.exports = readFolder;
