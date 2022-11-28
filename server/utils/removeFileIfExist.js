const removeFile = require('../utils/removeFile');

module.exports = (filePath) => {
    if (filePath) {
        removeFile(filePath);
    }
}