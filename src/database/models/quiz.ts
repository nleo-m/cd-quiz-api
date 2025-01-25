import { sequelize } from "../config";

const { DataTypes } = require("sequelize");

export const Quiz = sequelize.define("quiz", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
