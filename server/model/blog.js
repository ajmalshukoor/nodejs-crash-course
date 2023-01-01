const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//make a schema 
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    snippet: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, {timestamps : true});

//here model('Blog') will pluralize the collection in MongoDB to look for blogs
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;