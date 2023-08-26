const sequelize = require("../configs/database");
const bookingsModel = require("../models/bookingsModel");
const bookingsSheetsModel = require("../models/bookingsSheetsModel");
const showsModel = require("../models/showsModel");
const bookingsSheetsValidation = require("../validations/bookingsSheetsValidation");
const bookingsValidation = require("../validations/bookingsValidation");

const bookingsController = require("express").Router();

bookingsController.get("/", (req, res)=>{
    bookingsModel.findAndCountAll().then(result=>{
        return res.status(200).json({
            date: new Date(),
            count: result?.count,
            data: result?.rows
        });
    }).catch(error=>{
        return res.status(400).json({
            dateTime: new Date(),
            error: error
        });
    });
});



bookingsController.get("/:bookingId", (req, res)=>{
    let {bookingId} = req.params;
    bookingsModel.findByPk(bookingId).then(result=>{
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


bookingsController.post("/", async (req, res, next)=>{
    let bodyData = req.body;
    let bookingsData = {
        cityId: bodyData?.cityId,
        theatreId: bodyData?.theatreId,
        movieId: bodyData?.movieId,
        showId: bodyData?.showId,
        date: bodyData?.date,
        timing: bodyData?.timing
    };
    let bookingsSheets = bodyData?.sheets;

    let {error} = bookingsValidation.validate(bookingsData);    
    //let {errorItems} = bookingsSheetsValidation.validate(bookingsSheets);
    
    if(!error){
        const t = await sequelize.transaction();
        try{
            let showInfo = await showsModel.findByPk(bookingsData.showId);
            const totalAmmount = showInfo.price * bookingsSheets.length;
            let booking = await bookingsModel.create({...bookingsData, amount: totalAmmount, transactionId: t?.id}, { transaction: t });
            bookingsSheets = bookingsSheets.map(item => ({
                ...item,
                ["showId"]: bookingsData?.showId,
                ["bookingId"]: booking?.id
            }));
            await bookingsSheetsModel.bulkCreate(bookingsSheets, { transaction: t });
            t.commit();
            return res.status(201).json({
                date: new Date(),
                insertedId: booking.id,
                message: "A new booking has been done.",
            });
        }catch(err){
            await t.rollback();
            return res.status(400).json({
                dateTime: new Date(),
                message: "Error occurred.",
                error: err
            });
        }
    }else{
        return res.status(400).json({
            dateTime: new Date(),
            message: "Validation failed.",
            error: error??errorItems
        });
    }
});

bookingsController.patch("/:id/paymentStatus", async (req, res, next)=>{
    let {id} = req.params;
    let {paymentStatus} = req.body;
    if(paymentStatus !== ""){        
        const t = await sequelize.transaction();
        try{
            await bookingsModel.update({paymentStatus}, {
                where: {id: id},
                transaction: t
            });
            await t.commit();
            return res.status(200).json({
                date: new Date(),
                insertedId: id,
                message: "The Payment status has been updated.",
            });
        }catch(err){
            await t.rollback();
            return res.status(400).json({
                dateTime: new Date(),
                message: "Error occurred.",
                error: err
            });
        }        
    }else{
        return res.status(400).json({
            dateTime: new Date(),
            message: "Validation failed.",
            error: "paymentStatus must have a value."
        });
    }
})

module.exports = bookingsController;