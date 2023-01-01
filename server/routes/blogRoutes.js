const express = require('express');
const blogController = require('../controllers/blogController');

//blog routes

const router = express.Router();

const {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}  = blogController

//removes /blogs because we already called /blogs in the app.js at app.use('/blogs', blogRoutes). 
router.get('/', blog_index)
router.post('/', blog_create_post)
//This should go before the next one, otherwise it will give an error since the id triggers and look for id, which does not exist
router.get('/create', blog_create_get)
router.get('/:id', blog_details)
router.delete('/:id', blog_delete)

module.exports = router;