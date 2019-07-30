const mongoose = require("mongoose");
const movieSchema = new mongoose.Schema({
    title: {type:String, required: true},
    genre: String,
    year: Number,
    img: String,
    score: {type: Number, default: 0}
});

const Movies = mongoose.model("Movie", movieSchema);

module.exports = Movies;