const util = require('util');
const readFolder = require('./read-folder');
const path = require('path');

const FOLDER_PATH = path.resolve(__dirname, './myfiles');

const readFolderPromise = util.promisify(readFolder);

readFolderPromise(FOLDER_PATH).then(console.log).catch(console.error);
