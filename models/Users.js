const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    topTenMovies: [{
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Movies'
      }]
});

const Users = mongoose.model('User', userSchema);

module.exports = Users;