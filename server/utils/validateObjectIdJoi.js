const validateObjectId = require('./validateObjectId');

module.exports = (value, helpers) => {
    if (!validateObjectId(value)) {
        return helpers.error('any.invalid');
    }
    return value;
}