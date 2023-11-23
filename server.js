//with express
const express = require('express');
const app = express();
const PORT = 8080;
const mongoose = require('mongoose');
const categoriesRouter = require("./routes/categories")
const articlesRouter = require('./routes/articles')
const postsRouter = require("./routes/posts")


mongoose.connect('mongodb+srv://claudiufurtea:****@cluster0.sxjaqnw.mongodb.net/')


app.use(express.static('public'));

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))

app.use("/categories", categoriesRouter)
app.use("/articles", articlesRouter)
app.use("/posts", postsRouter)

app.get("/", (req, res) => {
  const categories = [{
    title: 'Category title',
    createdAt: new Date,
    numOfArticles: ""
  },
  {
    title: 'Category title 2',
    createdAt: new Date,
    numOfArticles: ""
  }
]
  res.render('home', {categories: categories});
});

app.use( express.json() );

const categorySchema = new mongoose.Schema({
  name: String,
  article: {
    name: String,
    description: String,
    price: Number,
    color: String,
    size: String,
  },
  post: {
    title: String,
    body: String,
    categoryName: String
  }
})

const Category = mongoose.model('Category', categorySchema);

const findPeopleByName = (name, done) => {
  Category.find({ name: name }, function(err, personFound) {
    if (err) return console.log(err);
    done(null, console.log(personFound))
  });
};

app.get('/getUser', (req, res) => {
  findPeopleByName(category,done)
})



app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
 });