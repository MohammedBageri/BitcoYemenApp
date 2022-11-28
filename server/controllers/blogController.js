const path = require('path');
const fs = require('fs');
const { BlogService } = require('../services');
const _ = require('lodash');
const { StatusCodes } = require('http-status-codes');
const CustomError = require('../errors');

const createBlog = async (req, res) => {
    const user = req.user.userId;
    const blogPost = _.pick(req.body, [ 'title', 'body', 'imageUrl']);

    if(!req.imagePath){
        throw new CustomError.BadRequestError('الرجاء ارفاق صورة');
    }
    blogPost.imageUrl = req.imagePath;

    const result = await BlogService.createBlog(user, blogPost);
    res.status(StatusCodes.OK).json(result);  
}

const updateBlog = async (req, res) => {
    const user = req.user.userId;
    const id = req.params.id;
    const blogPost = _.pick(req.body, [ 'title', 'body', 'imageUrl']);

    const blog = await BlogService.getBlog(id);
    if(blog.user._id.toString() !== user) 
        throw new CustomError.UnauthorizedError('لا يوجد لديك صلاحيات للتعديل');

    if(req.imagePath){
        if(blog.imageUrl){
            fs.unlink(path.join(__dirname, '../public/' + blog.imageUrl), (err) => {
                if (err) {
                    console.log(err);
                }
            });
        }
        blogPost.imageUrl = req.imagePath;
    }
    
    const result = await BlogService.updateBlog(id, blogPost);
    res.status(StatusCodes.OK).json(result);
}

const getAllBlogs = async (req, res) => {
    const result = await BlogService.getAllBlogs();
    res.status(StatusCodes.OK).json(result);
}

const getBlog = async (req, res) => {
    const id = req.params.id;
    const blog = await BlogService.getBlog(id);
    res.status(StatusCodes.OK).json(blog);
}

const deleteBlog = async (req, res) => {
    const user = req.user.userId;
    const id = req.params.id;

    const blog = await BlogService.getBlog(id);
    if(blog.user._id.toString() !== user) throw new CustomError.UnauthorizedError('لا يوجد لديك صلاحيات للحذف');

    const result = await BlogService.deleteBlog(id);
    res.status(StatusCodes.OK).json(result);
}

module.exports = {
    createBlog,
    updateBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
}