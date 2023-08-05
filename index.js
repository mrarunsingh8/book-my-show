require("dotenv").config();

const app = require("./api/app");
const sequelize = require("./api/configs/database");


app.listen(process.env.PORT, async ()=>{
    console.log(`Server is started on port: ${process.env.PORT}`);
    try{
        await sequelize.authenticate();
        console.log("Database is connected.");
    }catch(err){
        console.error("Database connection failed", err);
    }
});

