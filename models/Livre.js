const { DataTypes } = require("sequelize");
const sequelize = require("./sequelize");

const Livre = sequelize.define("livre", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  titre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Livre;
