const express = require('express');
const router = express.Router();


router.get('/new', (req, res) => {
    res.send("New Article")
})

router.get('/edit', (req, res) => {
    res.send("Edit Article")
})

router.get('/', (req, res) => {
    res.render('article', {articleId: req.params.articleId});
}) 

// router.get('/:articleId', (req, res) => {
//     res.render('article', {articleId: req.params.articleId});
// })

module.exports = router;