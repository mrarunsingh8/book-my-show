require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./api/app");
const sequelize = require("./api/configs/database");
const redisClient = require("./api/configs/redisClient");


app.listen(process.env.PORT, async ()=>{
    console.log(`Server is started on port: ${process.env.PORT}`);
    try{
        await sequelize.authenticate();
        await redisClient.connect();
        await mongoose.connect(process.env.MONGODB_STRING);
        //console.log("Database is connected.");
    }catch(err){
        console.error("Database connection failed", err);
    }
});

