const express = require('express');
const Post = require('./../models/post')
const router = express.Router();

router.get('/new/', (req, res) => {
    res.render('posts/new', { post: new Post() })
})

router.get('/:id', (req, res) => {
   res.send(req.params.id)
})

router.get('/', (req,res) => {
    res.send('ok')
})


router.post("/", async (req,res) => {
    let post = new Post({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })

    try {
        post = await post.save();
        console.log('Post:', post);
        res.redirect(`/posts/${post._id}`)
    } catch (e) {
        console.log(e)
        res.render('posts/new', { post: post })
    }
    
})


module.exports = router;