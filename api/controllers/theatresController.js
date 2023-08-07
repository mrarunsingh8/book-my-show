const citiesModel = require("../models/citiesModel");
const screensModel = require("../models/screensModel");
const theatresModel = require("../models/theatresModel");

const theatresController = require("express").Router();

theatresController.get("/", (req, res)=>{
    theatresModel.findAll().then(result=>{
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

theatresController.post("/", (req, res)=>{
    let {cityId, name, address} = req.body;
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


theatresController.get("/:theatreId/screens", (req, res, next)=>{
    let {theatreId} = req.params;
    theatresModel.findAll({
        include: {
            model: screensModel,
            attributes: ["name"]
        },
        where: {theatreId}
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

theatresController.get("/:theatreId/screens/:id", (req, res, next)=>{
    let {theatreId, id} = req.params;
    screensModel.findAll({
        where: {theatreId, id}
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


theatresController.post("/:theatreId/screens/", (req, res, next)=>{
    let {theatreId} = req.params;

    let {name} = req.body;
    screensModel.create({theatreId, name}).then((screen)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: screen.id,
            message: "A new screen created."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


theatresController.put("/:theatreId/screens/:id", (req, res, next)=>{
    let {theatreId, id} = req.params;
    let {name} = req.body;
    screensModel.update({name}, {where: {id}}).then((screen)=>{
        return res.status(200).json({
            date: new Date(),
            insertedId: screen.id,
            message: "The screen has been updated."
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});


theatresController.delete("/:theatreId/screens/:id", (req, res)=>{
    let {theatreId, id} = req.params;
    screensModel.destroy({where: {theatreId, id}}).then(()=>{
        return res.status(201).json({
            date: new Date(),
            deletedId: id,
            message: "The screen has been Deleted.",
        });
    }).catch((err)=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: err
        });
    });
});

module.exports = theatresController;