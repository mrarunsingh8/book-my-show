const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const theatresModel = require("./Theatres");

const Cities = sequelize.define("Cities", {
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

//Cities.hasMany(Theatres);
//Cities.sync();

(async () => {
    await Cities.sync({ force: true });
    // Code here
})();

module.exports = Cities;