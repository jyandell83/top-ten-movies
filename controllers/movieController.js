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
    },
    deleteMovie: async (req,res,next)  =>  {
        try  {
            console.log('movie should be deleted');
            const deletedMovie = await Movies.findByIdAndDelete(req.params.id);
            res.redirect('/movies');
        }  catch(err)  {
            next(err);
        }
    },
    editMovie: async (req,res,next)  =>  {
        try  {
            const foundMovie = await Movies.findById(req.params.id);
            res.render('movies/edit.ejs', {
                movie: foundMovie
            });
        }  catch(err)  {
            next(err);
        }
    }
}

module.exports = movieController;