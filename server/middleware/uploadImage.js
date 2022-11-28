const path = require('path');
const crypto = require('crypto');

module.exports = (folderName) => {
  return async (req, res, next) => {
    if(!req.files) {
        return next()
    }
    const imageFile = req.files.image;
    if(!imageFile.mimetype.startsWith('image')) 
        throw new CustomError.BadRequestError('please upload image');

    const maxSize = 1024 * 1024;
    if(imageFile.size > maxSize)
        throw new CustomError.BadRequestError(`please upload image smaller than 1MB`);

    const extension = imageFile.name.split('.').pop();
    const generatedName = crypto.randomUUID() + '.' + extension;
    const imagePath = path.join(__dirname, `../public/${folderName}/${generatedName}`);
    await imageFile.mv(imagePath);

    req.imagePath = `${folderName}/${generatedName}`;
    next()
  }
}