const citiesModel = require("../models/citiesModel");
const moviesModel = require("../models/moviesModel");
const screensModel = require("../models/screensModel");
const showsModel = require("../models/showsModel");
const theatreSheetsModel = require("../models/theatreSheetsModel");
const theatresModel = require("../models/theatresModel");

const theatresController = require("express").Router();

theatresController.get("/", (req, res) => {
    theatresModel.findAll().then(result => {
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

theatresController.get("/:id", (req, res) => {
    let { id } = req.params;
    theatresModel.findByPk(id).then(result => {
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

theatresController.post("/", (req, res) => {
    let { cityId, name, address } = req.body;
    theatresModel.create({ cityId, name, address }).then((theatre) => {
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "A new theatre created."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.put("/:id", (req, res) => {
    let { id } = req.params;
    let { cityId, name, address } = req.body;
    theatresModel.update({ cityId, name, address }, { where: { id } }).then((theatre) => {
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre has been updated."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.patch("/:id/name", (req, res) => {
    let { id } = req.params;
    let { name } = req.body;
    theatresModel.update({ name }, { where: { id } }).then((theatre) => {
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre name has been updated."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.patch("/:id/address", (req, res) => {
    let { id } = req.params;
    let { address } = req.body;
    theatresModel.update({ address }, { where: { id } }).then((theatre) => {
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre address has been updated."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.patch("/:id/city", (req, res) => {
    let { id } = req.params;
    let { cityId } = req.body;
    theatresModel.update({ cityId }, { where: { id } }).then((theatre) => {
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre city has been updated."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.delete("/:id", (req, res) => {
    let { id } = req.params;
    theatresModel.destroy({ where: { id: id } }).then(() => {
        return res.status(201).json({
            date: new Date(),
            deletedId: id,
            message: "The theatre has been Deleted.",
        });
    }).catch((err) => {
        return res.status(400).json({
            dateTime: new Date(),
            error: err
        });
    });
});

theatresController.get("/:id/screen/:screenId/sheets", (req, res) => {
    let {id, screenId} = req.params;
    screensModel.findOne({
        where:{
            id: screenId,
            theatreId: id,
        },
        include: [{
            model: theatreSheetsModel,
            required: true,
            order: [
                ["row", "ASC"],
                ["sheetNumber", "ASC"]
            ]
        }],
    }).then(result => {
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

theatresController.post("/:id/screen/:screenId/sheets", (req, res) => {
    let {screenId} = req.params;
    let { row, sheets } = req.body;
    let bulkData = [];
    for(let i=1; i<=sheets;i++){
        bulkData.push({screenId, row, sheetNumber: i});
    }
    theatreSheetsModel.bulkCreate(bulkData).then((bulk) => {
        return res.status(200).json({
            date: new Date(),
            //insertedId: theatre.id,
            message: "The sheets has been created for a theatre."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


/**
 * Fetch the shows which are associated with theatre
 * @type {RequestMode} GET
 * @param {Number} theatreId
 * @param {String} show
 * @returns {JSON} {date, insertedId, message}
 */

theatresController.get("/:theatreId/shows/", (req, res, next)=>{
    let { theatreId } = req.params;
    showsModel.findAll({
        include: {
            model: moviesModel
        },
        where: { theatreId }
    }).then(result => {
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

/**
 * Fetch a show by Id which are associated with theatre
 * @type {RequestMode} GET
 * @param {Number} theatreId
 * @param {String} show
 * @returns {JSON} {date, insertedId, message}
 */

theatresController.get("/:theatreId/shows/:show_id", (req, res, next)=>{
    let { theatreId, show_id } = req.params;
    showsModel.findOne({
        include: {
            model: moviesModel
        },
        where: { id: show_id, theatreId: theatreId }
    }).then(result => {
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

/**
 * Create a new show which is associated with a theater and screen which is associated with a movie.
 * @type {RequestMode} POST
 * @param {Number} theatreId - Primary id from the theatre table
 * @param {String} show - To use routing only
 * @body {JSON}
 * @returns {JSON} {date, insertedId, message}
 */
theatresController.post("/:theatreId/screen/:screenId/shows/", (req, res, next) => {
    let { screenId } = req.params;
    let { movieId, date, timing } = req.body;
    showsModel.create({ movieId, screenId, date, timing }).then((show) => {
        return res.status(201).json({
            date: new Date(),
            insertedId: show.id,
            message: "A new show created."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


/**
 * update the show which is associated with a theater and screen which is associated with a movie.
 * @type {RequestMode} POST
 * @param {Number} theatreId - Primary id from the theatre table
 * @param {String} show - To use routing only
 * @body {JSON}
 * @returns {JSON} {date, insertedId, message}
 */
theatresController.put("/:theatreId/shows/:showId", (req, res, next) => {
    let { theatreId, showId } = req.params;
    let { movieId, screen, date, timing } = req.body;
    showsModel.update({ theatreId, movieId, screen, date, timing }, {where: {id: showId, theatreId}}).then((show) => {
        return res.status(200).json({
            date: new Date(),
            insertedId: show.id,
            message: "The show has been updated."
        });
    }).catch(error => {
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

module.exports = theatresController;