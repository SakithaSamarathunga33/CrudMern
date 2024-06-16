const express = require('express');
const Post = require('../modules/posts');

const router = express.Router();

//save posts

router.post('/post/save', async (req,res) => {
    let newPost = new Post(req.body);

    try {
        const savedPost = await newPost.save();
        res.status(200).json({
            success: "Post saved successfully",
            post: savedPost
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
});

//get post

router.get('/post', async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json({
            success: true,
            existingPosts: posts
        });
    } catch (err) {
        res.status(400).json({
            error: err.message
        });
    }
});


//update posts

// Update posts
router.put('/post/update/:id', async (req, res) => {
    try {
        await Post.findByIdAndUpdate(req.params.id, { $set: req.body });
        res.status(200).json({
            success: "Updated successfully"
        });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete post
router.delete('/post/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        res.json({
            message: "Deleted successfully",
            deletedPost
        });
    } catch (err) {
        res.status(400).json({
            message: "Delete unsuccessful",
            error: err.message
        });
    }
});

module.exports = router;
