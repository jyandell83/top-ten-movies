const express        = require('express');
const mongoose = require("mongoose")
const Movies = require("./models/Movies")
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();
const movieRoutes = require("./routes/movieRoutes")
const userRoutes = require("./routes/userRoutes")
const commentRoutes = require("./routes/commentRoutes")
const logger = require("morgan")

require('dotenv').config()
const PORT = process.env.PORT;
//require database
require('./db/db');
//middleware

app.use(session({
    secret: 'RANDOMMOVIESTOPTEN1234',
    resave: false, 
    saveUninitialized: false}));
app.use(logger("dev"))
app.use(express.urlencoded())
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


app.use('/movies', movieRoutes);
app.use('/users', userRoutes);
app.use('/comments', commentRoutes);


app.get('/', async (req, res, next) => {
    try{
        const foundMovies = await Movies.find({}).sort({score: "desc"})
        res.render('index.ejs',  {
        session: req.session,
        movies: foundMovies
    });

    } catch (err){
        next(err)
    }

});

app.listen(PORT, () => {
    console.log(`listening..... on port ${PORT}`);
  });

