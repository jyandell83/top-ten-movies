const mongoose = require("mongoose")
const Users = require("../models/Users")
const Movies = require("../models/Movies")

const userController = {
    newUser: (req,res)=>{
        res.render("users/registration.ejs")
    },
    userIndex: async (req,res,next)  =>  {
        try  {
            const foundUsers = await Users.find();
            res.render("users/index.ejs", {
                users: foundUsers
            })
        } catch(err)  {
            next(err);
        }
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
            const foundUser = await Users.findById(req.params.id).populate('topTenMovies')
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
            const foundUser = await Users.findById(req.params.id);
            for(i=foundUser.topTenMovies.length; i>0; i--){
                foundUser.topTenMovies.pop()
            }

            for (i=0; i<3; i++){
                let movieId = await Movies.findById(req.body[i]);
                console.log(movieId, "in for loop")
                await foundUser.topTenMovies.push(movieId);
            }
            await foundUser.save()
            console.log(foundUser, "<--user after an update")
            res.redirect("/users/"+foundUser._id)
        }  catch(err)  {
            next(err)
        }
    }
}

module.exports = userController