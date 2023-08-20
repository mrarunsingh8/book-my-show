const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const theatreSheetsModel = require("./theatreSheetsModel");
const screensModel = require("./screensModel");

const theatresModel = sequelize.define("Theatres", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    cityId: {
        type: DataTypes.BIGINT,
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, { timestamps: false });

theatresModel.sync();


theatresModel.hasMany(screensModel, {foreignKey: "theatreId"});
screensModel.belongsTo(theatresModel, {foreignKey: "theatreId"});

/* theatresModel.hasMany(theatreSheetsModel, {foreignKey: "theatreId"});
theatreSheetsModel.belongsTo(theatresModel, {foreignKey: "theatreId"}); */


module.exports = theatresModel;