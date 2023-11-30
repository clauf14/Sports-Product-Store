const express = require('express');
const Article = require('../models/article');
const router = express.Router();
const mongoose = require('mongoose');
const Category = require('../models/category');


router.get('/edit/:id', async (req, res) => {
    const articleId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(articleId)) {
        return res.redirect('/');
    }
    const article = await Article.findById(articleId);
    res.render('articles/edit', {article:article})
})

router.get('/:id', async (req, res) => {
    try {
        const articleId = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(articleId)) {
            return res.redirect('/');
        }

        const article = await Article.findById(articleId);

        res.render('articles/show', { article: article });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}) 

router.put("/:id", async (req, res, next) => {
    req.article = await Article.findById(req.params.id)
    next()
}, saveArticleAndRedirect('edit'))


router.delete('/:id', async (req, res) => {
    const articleId = req.params.id;

    try {
        const article = await Article.findByIdAndDelete(articleId);

        if (!article) {
            return res.status(404).send('Article not found');
        }

        const category = await Category.findOneAndUpdate(
            { articles: articleId },
            { $pull: { articles: articleId } },
            { new: true }
        );

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

function saveArticleAndRedirect(path){
    return async (req, res) => {
        
        let article = req.article
        let category = await Category.findOne({ articles: article._id });
        
        article.name = req.body.name
        article.description = req.body.description
        article.size = req.body.size
        article.color = req.body.color
        article.price = req.body.price
    
        try {
            article = await article.save();
            res.redirect(`/categories/category/${category.id}`)
        } catch (e) {
            res.render(`articles/${path}`, { article: article })
        }
    }
}

module.exports = router;