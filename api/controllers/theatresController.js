const theatresModel = require("../models/Theatres");

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

theatresController.post("/", (req, res)=>{
    res.send("POST /theatre");
});

theatresController.put("/", (req, res)=>{
    res.send("PUT /theatre");
});

theatresController.patch("/", (req, res)=>{
    res.send("PATCH /theatre");
});

theatresController.delete("/", (req, res)=>{
    res.send("DELETE /theatre");
});

module.exports = theatresController;