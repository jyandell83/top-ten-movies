const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    likes: Number,
    topTenMovies: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movie'
      }]
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;