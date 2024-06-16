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

router.get('/post',(req,res) => {
    Post.find().exec((err,posts) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPost:posts
        });
    });

});

//update posts

router.put('/post/update/:id',(req,res) =>{
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) =>{
            if(err){
                return res.status(400).json({error:err});
            }
            return res.status(200).json({
                success:"update successfully"
            });
        }
    );
});

//delete post

router.delete('/post/delete/:id',(res,req))

module.exports = router;
