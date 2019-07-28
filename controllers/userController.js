const mongoose = require("mongoose")
const Users = require("../models/Users")
const Movies = require("../models/Movies")

const userController = {
    newUser: (req,res)=>{
        res.render("users/registration.ejs")
    },
    createUser: async (req,res,next)  => {
        try{
            const createdUser = await Users.create(req.body);
            res.redirect('/users/'+createdUser._id);
        } catch(err)  {
            next(err)
        }
    },
    showUser: async (req,res,next)  =>  {
        try  {
            const foundUser = await Users.findById(req.params.id);
            console.log(foundUser);
            res.render('users/show.ejs', {
                user: foundUser
            });
        } catch(err)  {
            next(err)
        }
    },
    editUser: async (req,res,next)  =>  {
        try {
            const foundUser = await Users.findById(req.params.id);
            const foundMovies = await Movies.find({});
            res.render('users/edit.ejs', {
                user:foundUser,
                movies: foundMovies
            })
        } catch(err)  {
            next(err)
        }
    },
    updateTopTen: async (req,res,next)  =>  {
        try  {
            console.log(req.body);
            const foundUser = await Users.findById(req.params.id);
            const movieId = await Movies.findById(req.body.movieId);
            await foundUser.topTenMovies.push(movieId);
            await foundUser.save()
            res.redirect("/users/"+foundUser._id)
        }  catch(err)  {
            next(err)
        }
    }
}

module.exports = userController