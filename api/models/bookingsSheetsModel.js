const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const bookingsSheetsModel = sequelize.define("BookingsSheets", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    bookingId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    showId:{
        type: DataTypes.BIGINT,
        allowNull: false
    },
    screenId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    row: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    sheetNumber: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
}, { 
    indexes: [{
        name: "index_by_bookingId",
        fields: ["bookingId"]
    },{
        unique: true,
        fields: ['showId', 'screenId', 'row', 'sheetNumber'],
        name: 'unique_sheet_combination'
    }],
    timestamps: false
});

bookingsSheetsModel.sync();

module.exports = bookingsSheetsModel;