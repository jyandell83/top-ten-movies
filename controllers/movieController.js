const mongoose = require("mongoose")
const Movies = require("../models/Movies")

const movieController = {
    movieMain: (req,res)  =>  {
    console.log('movie main page route hit');
    res.send('movie main page from controller');
    }
}

module.exports = movieController;