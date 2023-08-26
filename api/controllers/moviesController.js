const redisClient = require("./../configs/redisClient");

const moviesController = require("express").Router();
const moviesModel = require("../models/moviesModel");
const movieReviewsModel = require("../models/movieReviewsModel");


moviesController.get("/", (req, res)=>{
    moviesModel.findAll().then(result=>{
        return res.status(200).json({
            date: new Date(),
            data: result
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

moviesController.get("/:id", async (req, res)=>{
    let {id} = req.params;
    let key = `movie_${id}`;
    let movie = await redisClient.get(key);
    moviesModel.findByPk(id).then(result=>{
        movie = movie && JSON.parse(movie);
        return res.status(200).json({
            date: new Date(),
            data: {...movie, ...result}
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


moviesController.post("/", (req, res)=>{
    let {name, description, languages, categories} = req.body;
    moviesModel.create({name, description, languages, categories}).then(result=>{
        return res.status(201).json({
            date: new Date(),
            insertedId: result.id,
            message: "A new movie has been created.",
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

moviesController.get("/:movieId/reviews", (req, res)=>{
    let {movieId} = req.params;
    movieReviewsModel.aggregate([
        {
          $group: {
            _id: null,
            averageRating: { $avg: '$rating' },
            totalCount: { $sum: 1 },
            reviews: { $push: '$$ROOT' }
          }
        }
      ]).then(result=>{
        return res.status(200).json({
            date: new Date(),
            data: result
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

moviesController.post("/:movieId/reviews", (req, res)=>{
    let {movieId} = req.params;
    let {userId, comment, rating} = req.body;
    let review = new movieReviewsModel({userId, movieId, comment, rating});
    review.save().then(result=>{
        return res.status(201).json({
            date: new Date(),
            message: "The review has been added.",
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


moviesController.post("/:movieId/reviews/:reviewId/reaction", (req, res)=>{
    let {movieId, reviewId} = req.params;
    let {reaction} = req.body;
    movieReviewsModel.findByIdAndUpdate(reviewId, {
        $inc: { likes: (reaction === "like")?1:0, dislikes: (reaction === "dislike")?1:0 }
    }, { new: true }).then(result=>{
        return res.status(201).json({
            date: new Date(),
            message: "Your reaction has been recorded.",
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

moviesController.put("/:id", (req, res)=>{
    let {id} = req.params;
    let {name, description, languages, categories} = req.body;
    moviesModel.update({name, description, languages, categories}, {where: {id}}).then(result=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: id,
            message: "The movie has been updated.",
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});



moviesController.delete("/:id", (req, res)=>{
    let {id} = req.params;
    moviesModel.destroy({where: {id: id}}).then(()=>{
        return res.status(204).json({
            date: new Date(),
            deletedId: id,
            message: "The movie has been Deleted.",
        });
    }).catch((err)=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: err
        });
    });
});



module.exports = moviesController;