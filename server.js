const express        = require('express');
// const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();
const movieRoutes = require("./routes/movieRoutes")
const userRoutes = require("./routes/userRoutes")
const logger = require("morgan")


//require database
require('./db/db');
//middleware
app.use(logger("dev"))
app.use(express.urlencoded())
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));


app.use('/movies', movieRoutes);
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    console.log('home page route hit');
    res.render('index.ejs');

});

app.listen(3000, () => {
    console.log('listening..... on port 3000');
  });

