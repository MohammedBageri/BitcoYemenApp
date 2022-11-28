const sendEmail = require('../utils/sendEmail');
const { EmailTemplateService  } = require('../services');
const _ = require('lodash');
const Joi = require('joi');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const sendEmailHttp = async (req, res) => {
    const email = _.pick(req.body, [ 'to', 'subject', 'html' ])
    const { error } = validateEmail(email)
    if (error) {
        throw new CustomError.BadRequestError(error);
    }
    const info = await sendEmail(email);
    res.json(info);
}

const createEmailTemplate = async (req, res) => {
    const { name, html } = req.body;
    const result = await EmailTemplateService.createEmailTemplate(name, html);
    res.status(StatusCodes.CREATED).json(result);
}

const editEmailTemplate = async (req, res) => {
    const { id } = req.params;
    const { name, html } = req.body;
    const result = await EmailTemplateService.editEmailTemplate(id, name, html);
    res.status(StatusCodes.OK).json(result);
}

const getAllEmailTemplate = async (req, res) => {
    const result = await EmailTemplateService.getAllEmailTemplate();
    res.status(StatusCodes.OK).json(result);
}

const getEmailTemplate = async (req, res) => {
    const { id } = req.params;
    const result = await EmailTemplateService.getEmailTemplate(id);
    res.status(StatusCodes.OK).json(result);
}

const deleteEmailTemplate = async (req, res) => {
    const { id } = req.params;
    const result = await EmailTemplateService.deleteEmailTemplate(id);
    res.status(StatusCodes.OK).json(result);
}

function validateEmail(email){
    const schema = Joi.object({
        to: Joi.string().email({ tlds: { allow: false } }).required(),
        subject: Joi.string().required(),
        html: Joi.string().required(),
    });
    return schema.validate(email);
} 

module.exports = {
    sendEmailHttp,
    createEmailTemplate,
    editEmailTemplate,
    getAllEmailTemplate,
    getEmailTemplate,
    deleteEmailTemplate,
}