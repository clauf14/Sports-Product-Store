//with express
const express = require('express');
const app = express();
const PORT = 8080;

const mongoose = require('mongoose');

const categoriesRouter = require("./routes/categories")

const articlesRouter = require('./routes/articles')

const methodOverride = require('method-override')

const postsRouter = require("./routes/posts")
const Post = require('./models/post')
const Category = require('./models/category')
const Article = require('./models/category')
require('dotenv').config();

const URI = process.env.MONGODB_URI


mongoose.connect(URI)


app.use(express.static('public'));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))
app.use(methodOverride('_method'))

app.use("/categories", categoriesRouter)
app.use("/articles", articlesRouter)
app.use("/posts", postsRouter)

app.get("/", async (req, res) => {
  const posts = await Post.find().sort({createdAt: 'desc'})
  const categories = await Category.find().sort({title: 'asc'})
  res.render('home', {posts: posts, categories:categories});
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
 });