const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('categories/new')
    articles = [{
        title: "Nike Tshirt",
        color: "Black",
        description: 'lalal',
        price: 199,
        size : "L"
    },
    {
        title: "Adidas Tshirt",
        color: "White",
        description: 'lalal',
        price: 269,
        size : "M"
    }]
})

router.get('/edit', (req, res) => {
    res.render('editCategory')
})

router.get('/', (req, res) => {
    res.render('categories/home', {categoryId: req.params.categoryId});
})

router.post('/', (req, res) => {
    
})


module.exports = router;