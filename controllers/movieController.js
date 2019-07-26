const mongoose = require("mongoose")
const Movies = require("../models/Movies")

const movieController = {
    movieMain: async (req,res, next)  =>  {
    try{
        const foundMovies = await Movies.find()
        res.render("movies/index.ejs", {
            movies: foundMovies
        })
    }catch(err){
        next(err)
    }
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
    showMovie: async (req,res,next)  =>  {
        try  {
            const foundMovie = await Movies.findById(req.params.id);
            console.log(foundMovie);
            res.render('movies/show.ejs', {
                movie: foundMovie
            });
        } catch(err)  {
            next(err);
        }
    }
}

module.exports = movieController;