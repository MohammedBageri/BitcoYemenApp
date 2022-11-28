const path = require('path');
const fs = require('fs');

module.exports = async (imagePath) => {
    fs.unlink(path.join(__dirname, '../public/' + imagePath), (err) => {
        if (err) {
            console.log(err);
        }
    });
}