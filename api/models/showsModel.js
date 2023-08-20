const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");

const showsModel = sequelize.define("Shows", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    screenId: {
        type: DataTypes.BIGINT
    },
    movieId: {
        type: DataTypes.BIGINT
    },
    price: {
        type: DataTypes.FLOAT
    },
    date: {
        type: DataTypes.DATEONLY
    },
    timing:{
        type: DataTypes.TIME
    }
}, { 
    timestamps: false
});

/* theatresModel.hasMany(showsModel, {foreignKey: "theatreId"});
showsModel.belongsTo(theatresModel, {foreignKey: "theatreId"});

moviesModel.hasMany(showsModel, {foreignKey: "movieId"});
showsModel.belongsTo(moviesModel, {foreignKey: "movieId"}); */

showsModel.sync();

module.exports = showsModel;