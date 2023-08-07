const moviesController = require("express").Router();
const moviesModel = require("../models/moviesModel");

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

moviesController.get("/:id", (req, res)=>{
    let {id} = req.params;
    moviesModel.findByPk(id).then(result=>{
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


moviesController.post("/", (req, res)=>{
    let {name, description, languages, categories} = req.body;
    moviesModel.create({name, description, languages, categories}).then(result=>{
        return res.status(200).json({
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





module.exports = moviesController;