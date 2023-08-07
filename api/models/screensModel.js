const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const screensModel = sequelize.define("Screen", {
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

module.exports = screensModel;