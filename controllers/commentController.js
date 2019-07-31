const mongoose = require("mongoose")
const Comments = require("../models/Comments")
const Users = require("../models/Users")
const Movies = require("../models/Movies")

const commentController = {
    postComment: async (req,res, next)  =>  {
        try  {
            const createdComment = await Comments.create(req.body);
            console.log(createdComment);
            res.redirect('back');
        } catch(err) {
            next(err)
        }
    }
}



module.exports = commentController