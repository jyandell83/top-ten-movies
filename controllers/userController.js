const mongoose = require("mongoose")
const Users = require("../models/Movies")

const userController = {
    newUser: (req,res)=>{
        res.render("users/registration.ejs")
    }
}

module.exports = userController