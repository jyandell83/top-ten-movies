const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    content: {type: String, required: true},
    author: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
      }],
    movie: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie'
    }]
});

const Comments = mongoose.model('Comment', commentSchema);

module.exports = Comments;