const citiesModel = require("../models/citiesModel");
const theatresModel = require("../models/theatresModel");

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
    const {name} = req.body;    
    citiesModel.create({name}).then((city)=>{
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
});

citiesController.put("/:id", (req, res)=>{
    const {id} = req.params;
    const {name} = req.body;
    citiesModel.update({name: name}, { where: { id: id }}).then(()=>{
        return res.status(201).json({
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
});


citiesController.delete("/:id", (req, res)=>{
    let {id} = req.params;
    citiesModel.destroy({where: {id: id}}).then(()=>{
        return res.status(201).json({
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


module.exports = citiesController;