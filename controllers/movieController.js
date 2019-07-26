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
    postMovie: async (req,res, next)=>{
        try{
            const newMovie = await Movies.create(req.body)
            console.log(newMovie)
            res.redirect("/movies")
        } catch(err){
            next(err)
        }
    },
}

module.exports = movieController;