const { default: mongoose } = require("mongoose");

const movieReviewsSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true
    },
    movieId: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
});

const movieReviewsModel = mongoose.model('movieReviews', movieReviewsSchema);

module.exports = movieReviewsModel;