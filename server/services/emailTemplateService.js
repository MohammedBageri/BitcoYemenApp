const EmailTemplate = require('../models/EmailTemplate');
const CustomError = require('../errors');

const createEmailTemplate = async (name, html) => {
    if(!name || !html){
        throw new CustomError.BadRequestError('name or html الرجاء تزويد للـ');
    }
    return await EmailTemplate.create({ name, html });
}
const editEmailTemplate = async (id, name, html) => {
    if(!name || !html){
        throw new CustomError.BadRequestError('name or html الرجاء تزويد');
    }
    const template = await EmailTemplate.findOne({ _id:id });
    if(!template){
        throw new CustomError.NotFoundError('القالب غير موجود');
    }
    template.name = name;
    template.html = html;
    return template.save();
}

const getAllEmailTemplate = async () => {
    return await EmailTemplate.find();
}

const getEmailTemplate = async (id) => {
    const template = await EmailTemplate.findOne({ _id:id });
    if(!template){
        throw new CustomError.NotFoundError('القالب غير موجود');
    }
    return template;
}

const deleteEmailTemplate = async (id) => {
    const template = await EmailTemplate.findOne({ _id:id });
    if(!template){
        throw new CustomError.NotFoundError('القالب غير موجود');
    }
    if(template.number){
        throw new CustomError.BadRequestError('لا يمكنك حذف هذا القالب');
    }
    return template.delete();
}

module.exports = {
    createEmailTemplate,
    editEmailTemplate,
    getAllEmailTemplate,
    getEmailTemplate,
    deleteEmailTemplate,
}