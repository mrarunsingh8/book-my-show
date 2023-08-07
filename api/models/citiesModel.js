const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const theatresModel = require("./theatresModel");

const citiesModel = sequelize.define("Cities", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
}, { timestamps: false });

citiesModel.sync();
citiesModel.hasMany(theatresModel, {foreignKey: 'cityId'});
theatresModel.belongsTo(citiesModel, {foreignKey: 'cityId'});

module.exports = citiesModel;