const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const theatreSheetsModel = require("./theatreSheetsModel");
const showsModel = require("./showsModel");

const screensModel = sequelize.define("Screens", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    theatreId: {
        type: DataTypes.BIGINT
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, { timestamps: false });

screensModel.sync();

screensModel.hasMany(theatreSheetsModel, {foreignKey: 'screenId'});
theatreSheetsModel.belongsTo(screensModel, {foreignKey: 'screenId'});

screensModel.hasMany(showsModel, { foreignKey: 'screenId'});
showsModel.belongsTo(screensModel, { foreignKey: 'screenId'});

module.exports = screensModel;