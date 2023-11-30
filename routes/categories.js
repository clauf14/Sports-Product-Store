const express = require('express');
const Category = require('./../models/category')
const Article = require('./../models/article');
const router = express.Router();
const mongoose = require('mongoose')



router.get('/new', (req, res) => {
    res.render('categories/new', { category: new Category() })
})

router.get('/category/edit/:id', async (req, res) => {
    try {
        const categoryId = req.params.id;

        if (!mongoose.Types.ObjectId.isValid(categoryId)) {
            return res.redirect('/');
        }

        const category = await Category.findById(categoryId);

        res.render('categories/edit', { category: category });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});


router.get('/category/:id', async (req, res) => {
    try {
        const category = await Category.findOne({_id:req.params.id}).populate('articles');

        if (!category) {
            return res.redirect('/');
        }

        res.render('categories/show', { category: category});
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post("/category", async (req, res) => {
    try {
        // Creating multiple articles
        let article = new Article({
            name: req.body.name,
            description: req.body.description,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price
        });

        let category = new Category({
            title: req.body.title,
            articles: [article.id] // Add article references to the array
        });

        // Saving the category
        article = await article.save();
        category = await category.save();

        console.log('Category with Articles:', category);
        console.log('Articles:', article);

        res.redirect(`/categories/category/${category.id}`);
    } catch (error) {
        console.error('Error:', error);
        res.render('categories/new', { error: 'Failed to create category and articles' });
    }
});


// New route for handling the form submission to add a new article to a category
router.post('/category/:id/new-article', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);

        if (!category) {
            return res.redirect('/');
        }

        let article = new Article({
            name: req.body.name,
            description: req.body.description,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
        });

        article = await article.save();

        category.articles.push(article._id);
        await category.save();

        res.redirect(`/categories/category/${category.id}`);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});



router.put("/category/:id", async (req, res, next) => {
    req.category = await Category.findById(req.params.id)
    next()
}, saveCategoryAndRedirect('edit'))



router.delete('/category/:id', async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.redirect('/')
})



function saveCategoryAndRedirect(path){
    return async (req, res) => {
        let category = req.category
        category.title = req.body.title
        try {
            category = await category.save();
            res.redirect(`/categories/category/${category._id}`)
        } catch (e) {
            res.render(`categories/category/${path}`, { category: category })
        }
    }
}

module.exports = router;