const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const bookingsSheetsModel = require("./bookingsSheetsModel");

const bookingsModel = sequelize.define("Bookings", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    transactionId: {
        type: DataTypes.STRING(250),
    },
    cityId: {
        type: DataTypes.BIGINT,
    },
    theatreId: {
        type: DataTypes.BIGINT
    },
    movieId: {
        type: DataTypes.BIGINT
    },
    date: {
        type: DataTypes.DATEONLY
    },
    timing:{
        type: DataTypes.TIME
    },
    amount:{
        type: DataTypes.FLOAT
    },    
    paymentStatus:{
        type: DataTypes.ENUM("Process", "Complete", "Pending", "Cancelled"),
        defaultValue: "Process"
    }
}, {
    timestamps: true
});

bookingsModel.hasMany(bookingsSheetsModel, {foreignKey: "bookingId"});
bookingsSheetsModel.belongsTo(bookingsModel, {foreignKey: "bookingId"});

bookingsModel.sync();

module.exports = bookingsModel;