const BlogPost = require('../models/BlogPost');
const CustomError = require('../errors');

const createBlog = async (user, blogPost) => {
    const { error } = BlogPost.schemaValidator(blogPost);
    if (error) throw new CustomError.BadRequestError(error);

    blogPost.user = user;
    const newBlog = new BlogPost(blogPost);
    return await newBlog.save();
}

const updateBlog = async (id ,updatedBlogPost) => {
    const { error } = BlogPost.schemaValidator(updatedBlogPost);
    if (error) throw new CustomError.BadRequestError(error);

    const blogPost = await BlogPost.findOne({_id: id});
    if(!blogPost) throw new CustomError.NotFoundError('المقالة لا توجد');

    blogPost.title = updatedBlogPost.title;
    blogPost.body = updatedBlogPost.body;
    if (updatedBlogPost.imageUrl) {
        blogPost.imageUrl = updatedBlogPost.imageUrl;
    }
    return await blogPost.save();
}

const getAllBlogs = async () => {
    return await BlogPost.find()
        .populate('user', '-password -role -verificationToken -isVerified -verified -__v');
}

const getBlog = async (id) => {
    const blog = await BlogPost.findOne({_id: id})
        .populate('user', '-password -role -verificationToken -isVerified -verified -__v');
    if(!blog) throw new CustomError.NotFoundError(`${id} المقالة لا توجد`);
    return blog;
}

const deleteBlog = async (id) => {
    return await BlogPost.deleteOne({   _id: id});
}

module.exports = {
    createBlog,
    updateBlog,
    getAllBlogs,
    getBlog,
    deleteBlog,
}