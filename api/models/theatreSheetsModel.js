const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const theatreSheetsModel = sequelize.define("TheatreSheets", {
    screenId: {
        type: DataTypes.BIGINT,
        primaryKey: true,
    },
    row: {
        type: DataTypes.STRING(10),
        primaryKey: true,
    },
    sheetNumber: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    }
}, {
    timestamps: false
});

theatreSheetsModel.sync();

module.exports = theatreSheetsModel;