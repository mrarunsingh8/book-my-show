const { Sequelize, Op } = require("sequelize");
const citiesModel = require("../models/citiesModel");
const moviesModel = require("../models/moviesModel");
const showsModel = require("../models/showsModel");
const theatresModel = require("../models/theatresModel");
const sequelize = require("../configs/database");
const citiesValidation = require("../validations/citiesValidation");
const screensModel = require("../models/screensModel");
const theatreSheetsModel = require("../models/theatreSheetsModel");

const citiesController = require("express").Router();

citiesController.get("/", (req, res)=>{
    citiesModel.findAll().then(result=>{
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

citiesController.get("/:id", (req, res)=>{
    let {id} = req.params;
    citiesModel.findByPk(id).then(result=>{
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

citiesController.post("/", async (req, res, next)=>{
    const bodyData = req.body;
    const {error} = citiesValidation.validate(bodyData);
    if(!error){
        citiesModel.create(bodyData).then((city)=>{
            return res.status(201).json({
                date: new Date(),
                insertedId: city.id,
                message: "A new city has been created.",
            });
        }).catch((err)=>{
            return res.status(400).json({
                dateTime: new Date(),
                error: err
            });
        });
    }else{
        return res.status(400).json({
            dateTime: new Date(),
            message: "Validation fail.",
            error: error
        });
    }
});

citiesController.put("/:id", (req, res)=>{
    const {id} = req.params;
    const bodyData = req.body;
    const {error} = citiesValidation.validate(bodyData);
    if(!error){
        citiesModel.update(bodyData, { where: { id: id }}).then(()=>{
            return res.status(200).json({
                date: new Date(),
                affectedId: id,
                message: "The city has been updated.",
            });
        }).catch((err)=>{
            return res.status(400).json({
                dateTime: new Date(),
                error: err
            });
        });
    }else{
        return res.status(400).json({
            dateTime: new Date(),
            message: "Validation fail.",
            error: error
        });
    }
});


citiesController.delete("/:id", (req, res)=>{
    let {id} = req.params;
    citiesModel.destroy({where: {id: id}}).then(()=>{
        return res.status(204).json({
            date: new Date(),
            deletedId: id,
            message: "The city has been Deleted.",
        });
    }).catch((err)=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: err
        });
    });
});


citiesController.get("/:cityId/movies", (req, res)=>{
    let {cityId} = req.params;
    moviesModel.findAll({
        include: [{
            model: showsModel,
            attributes: [],
            required: true,
            include: [{
                model: screensModel,
                required: true,
                include: [{
                    model: theatresModel,
                    attributes: [],
                    where: {cityId: cityId} 
                }]
            }]
        }],
        distinct: true
    }).then(result=>{
        return res.status(200).json({
            date: new Date(),
            cityId,
            data: result
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


citiesController.get("/:cityId/movies/:movieId/theatres/:date/date", (req, res)=>{
    let {cityId, movieId, date} = req.params;
    const choosedDate = new Date(date);
    const currentDate = new Date();
    theatresModel.findAll({
        include: [{
            model: screensModel,
            attributes: {exclude: ["name", "theatreId"]},
            required: true,
            include: {
                model: showsModel,
                where: {
                    movieId: movieId,
                    [Op.or]: [
                        {
                            date: {
                                [Op.eq]: choosedDate.toISOString().slice(0, 10) // Format: YYYY-MM-DD
                            }
                        },
                        {
                            date: {
                                [Op.eq]: currentDate.toISOString().slice(0, 10) // Format: YYYY-MM-DD
                            },
                            timing: {
                                [Op.gt]: `${currentDate.getHours()}:${currentDate.getMinutes()}:00` // Format: HH:MM:SS
                            }
                        }
                    ]
                }
            },
        }],
        where: { cityId: cityId }
    }).then(result=>{
        return res.status(200).json({
            date: new Date(),
            cityId,
            data: result
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

citiesController.get("/:cityId/movies/:movieId/theatre/:theatreId/shows/:showId/sheets/", (req, res, next) => {
    let { theatreId, movieId, showId } = req.params;
    theatreSheetsModel.findAll({
        include: [{
            model: screensModel,
            required: true,
            where:{
                theatreId: theatreId
            },
            include: [{
                model: showsModel,
                required: true,
                where: {
                    id: showId,
                    movieId: movieId
                }
            }]
        }],
        order:[["row", "ASC"], ["sheetNumber", "ASC"]]
    }).then((result) => {
        return res.status(200).json({
            date: new Date(),
            data: result
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

module.exports = citiesController;