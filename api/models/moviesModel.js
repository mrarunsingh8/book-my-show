const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const screensModel = require("./screensModel");
const theatresModel = require("./theatresModel");

const moviesModel = sequelize.define("Movies", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    description: {
        type: DataTypes.STRING(3000),
    },
    languages: {
        type: DataTypes.STRING(250),
    }
}, { timestamps: false });

/* const moviesTheatre = sequelize.define("Movies_Theatre", {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    movieId: {
        type: DataTypes.BIGINT,
    },
    theatreId: {
        type: DataTypes.BIGINT,
    }
}, { timestamps: false }); */

moviesModel.sync();

moviesModel.belongsToMany(theatresModel, {through: "Movies_Theatre"});
theatresModel.belongsToMany(moviesModel, {through: "Movies_Theatre"});

/* theatresModel.hasMany(moviesTheatre, {through: "Movies_Theatre"});
moviesTheatre.belongsToMany(theatresModel, {through: "Movies_Theatre"}); */

module.exports = moviesModel;