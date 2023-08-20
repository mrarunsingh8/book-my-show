const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const showsModel = require("./showsModel");

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
    price:{
        type: DataTypes.FLOAT
    },
    languages: {
        type: DataTypes.STRING(250),
    }
}, { timestamps: false });

moviesModel.sync();

moviesModel.hasMany(showsModel, { foreignKey: 'movieId'});
showsModel.belongsTo(moviesModel, { foreignKey: 'movieId'});

module.exports = moviesModel;