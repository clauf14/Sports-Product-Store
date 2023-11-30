const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    description: {
        type: String
    },
    size: {
        type:String,
        required: true
    },
    color: {
        type:String,
        required: true
    },
    price: {
        type:Number,
        required: true
    }
})

module.exports = mongoose.model('Article', articleSchema)