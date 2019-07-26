const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: {type:String, required: true},
    genre: String,
    year: Number,
    img: String
});

const Movies = mongoose.model("Movie", movieSchema);

module.exports = Movies;