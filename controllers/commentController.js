const mongoose = require("mongoose")
const Comments = require("../models/Comments")
const Users = require("../models/Users")
const Movies = require("../models/Movies")

const commentController = {
    postComment: async (req,res, next)  =>  {
        try  {
            // const foundMovie = await Movies.findById(req.body.movie);
            // const foundUser = await Users.findById(req.session.userId);
            const createdComment = await Comments.create(req.body);
            console.log(createdComment);
        } catch(err) {
            next(err)
        }
    }
}



module.exports = commentController