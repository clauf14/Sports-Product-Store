const mongoose = require('mongoose')
// const articleSchema = require('./article')

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true  
    },
    articles:[ 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Article"
        }
    ]
})

module.exports = mongoose.model('Category', categorySchema)