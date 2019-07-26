const mongoose = require("mongoose")
const Movies = require("../models/Movies")

const movieController = {
    movieMain: (req,res)  =>  {
    console.log('movie main page route hit');
    res.send('movie main page from controller');
    },
    newMovie: (req,res)=>{
        res.render("movies/new.ejs")
    },
    postMovie: (req,res)=>{
        console.log(req.body)
        console.log("new movie")
    },
}

module.exports = movieController;