const moviesController = require("express").Router();
const { Model } = require("sequelize");
const moviesModel = require("../models/moviesModel");
const theatresModel = require("../models/theatresModel");

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