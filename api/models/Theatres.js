const { DataTypes } = require("sequelize");
const sequelize = require("../configs/database");
const Cities = require("./Cities");

const Theatres = sequelize.define("Theatres", {
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
    }
}, { timestamps: false });

Theatres.belongsTo(Cities);
Cities.hasMany(Theatres);

(async () => {
    await Theatres.sync({ force: true });
})();

module.exports = Theatres;