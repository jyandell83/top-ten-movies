const express        = require('express');
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
const session        = require('express-session');
const app            = express();

require('./db/db');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    console.log('home page route hit');
    res.send('home page is here');

});


app.listen(3000, () => {
    console.log('listening..... on port 3000');
  });

