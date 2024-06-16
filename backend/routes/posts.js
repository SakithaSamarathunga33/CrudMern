const express = require('express');
const Post = require('../modules/posts');

const router = express.Router();

//save posts

router.post('/posts/save', async (req,res) => {
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

router.get('/posts', async (req, res) => {
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

//get a specific post

router.get("/posts/:id", async (req, res) => {
    let postId = req.params.id;

    try {
        let post = await Post.findById(postId);
        return res.status(200).json({
            success: true,
            post
        });
    } catch (err) {
        return res.status(400).json({ success: false, err });
    }
});



// Update posts
router.put('/posts/update/:id', async (req, res) => {
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
router.delete('/posts/delete/:id', async (req, res) => {
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
