const mongoose = require("mongoose")
const Users = require("../models/Users")
const Movies = require("../models/Movies")
const bcrypt = require('bcryptjs');

const userController = {
    newUser: (req,res)=>{
        res.render("users/registration.ejs", {
            message: req.session.message,
            session: req.session
        })
    },
    userIndex: async (req,res,next)  =>  {
        try  {
            const foundUsers = await Users.find();
            res.render("users/index.ejs", {
                users: foundUsers,
                session: req.session
            })
        } catch(err)  {
            next(err);
        }
    },
    createUser: async (req,res,next)  => {
        const password = req.body.password;
        const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        req.body.password = hashedPassword;
        try{
            const createdUser = await Users.create(req.body);
            req.session.userId = createdUser._id;
            req.session.userName = createdUser.userName;
            req.session.logged = true;
            res.redirect('/users/'+createdUser._id+'/edit');
        } catch(err)  {
            next(err)
        }
    },

    loginUser: async (req,res,next)  => {
        try{
            const foundUser = await Users.findOne({userName: req.body.userName})

            if (foundUser){
                if(bcrypt.compareSync(req.body.password, foundUser.password)) {
                    req.session.userId = foundUser._id
                    req.session.userName = foundUser.userName
                    req.session.logged = true

                    res.redirect("/users")
                }else{
                    req.session.message = "Username or Password incorrect"

                    res.redirect("/users/registration")
                }
            } else {
                    req.session.message = "Username or Password incorrect"

                    res.redirect("/users/registration")

            }
        } catch(err)  {
            next(err)
        }
    },

    logOutUser:  (req,res)  =>  {
        req.session.destroy((err) =>{
            if (err){
                res.send(err)
            } else {
                res.redirect("/users/registration")
            }
        })
    },

    showUser: async (req,res,next)  =>  {
        try  {
            const foundMovies = await Movies.find({});
            const foundUser = await Users.findById(req.params.id).populate('topTenMovies')
            console.log(foundUser, "in show page")
            res.render('users/show.ejs', {
                user: foundUser,
                session: req.session,
                movies: foundMovies
            });
        } catch(err)  {
            next(err)
        }
    },
    editUser: async (req,res,next)  =>  {
        try {
            const foundUser = await Users.findById(req.params.id);
            const foundMovies = await Movies.find({});
            if(req.session.userId === req.params.id) {
                res.render('users/edit.ejs', {
                    user: foundUser,
                    movies: foundMovies,
                    session: req.session
                })
            } else{
                res.redirect("/")
            }
        } catch(err)  {
            next(err)
        }
    },
    deleteUser: async (req,res,next)  =>  {
        try  {
            console.log('user should be deleted');
            const deletedUser = await Users.findByIdAndDelete(req.params.id);
            res.redirect('/');
        }  catch(err)  {
            next(err);
        }
    },
    updateTopTen: async (req,res,next)  =>  {
        const foundUser = await Users.findById(req.params.id);
        try  {
            req.session.message = null
            for(i=foundUser.topTenMovies.length; i>0; i--){
                foundUser.topTenMovies.pop()
            }

            for (i=0; i<10; i++){
                let movieId = await Movies.findById(req.body[i]);
                console.log(movieId, "movieID", i)
                movieId.score += 10 - i 
                await movieId.save()
                await foundUser.topTenMovies.push(movieId);
            }
            console.log(foundUser, "before saving")
            await foundUser.save()
            await 
            console.log(foundUser, "after saving")
            res.redirect("/users/"+foundUser._id)
        }  catch(err)  {
            req.session.message = "Pick all movies"
            res.redirect("/users/"+foundUser._id+"/edit")
            next(err)
        }
    }
}

module.exports = userController