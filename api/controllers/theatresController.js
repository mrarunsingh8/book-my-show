const citiesModel = require("../models/citiesModel");
const theatresModel = require("../models/theatresModel");

const theatresController = require("express").Router();

theatresController.get("/", (req, res)=>{
    theatresModel.findAll({
        include: {
            model: citiesModel,
            attributes: ['name'],
        }
    }).then(result=>{
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

theatresController.get("/:id", (req, res)=>{
    let {id} = req.params;
    theatresModel.findByPk(id).then(result=>{
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

theatresController.post("/:cityId", (req, res)=>{
    let {cityId} = req.params;
    let {name, address} = req.body;
    theatresModel.create({cityId, name, address}).then((theatre)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "A new theatre created."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.put("/:id", (req, res)=>{
    let {id} = req.params;
    let {cityId, name, address} = req.body;
    theatresModel.update({cityId, name, address}, {where: {id}}).then((theatre)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre has been updated."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.patch("/:id/name", (req, res)=>{
    let {id} = req.params;
    let {name} = req.body;
    theatresModel.update({name}, {where: {id}}).then((theatre)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre name has been updated."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.patch("/:id/address", (req, res)=>{
    let {id} = req.params;
    let {address} = req.body;
    theatresModel.update({address}, {where: {id}}).then((theatre)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre address has been updated."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.patch("/:id/city", (req, res)=>{
    let {id} = req.params;
    let {cityId} = req.body;
    theatresModel.update({cityId}, {where: {id}}).then((theatre)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: theatre.id,
            message: "The theatre city has been updated."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});

theatresController.delete("/:id", (req, res)=>{
    let {id} = req.params;
    theatresModel.destroy({where: {id: id}}).then(()=>{
        return res.status(201).json({
            date: new Date(),
            deletedId: id,
            message: "The theatre has been Deleted.",
        });
    }).catch((err)=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: err
        });
    });
});

module.exports = theatresController;