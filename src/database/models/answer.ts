import { sequelize } from "../config";

const { DataTypes } = require("sequelize");

export const Answer = sequelize.define("answer", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  questionId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "questions",
      key: "id",
    },
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
