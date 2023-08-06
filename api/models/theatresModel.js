const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const theatresModel = sequelize.define("Theatres", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    cityId: {
        type: DataTypes.BIGINT
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

module.exports = theatresModel;