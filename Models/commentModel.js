const mongoose = require("mongoose")

const commentSchema = mongoose.Schema({
    comment: String,
    
})

const commentModel= mongoose.model('comment', commentSchema)

module.exports = commentModel;