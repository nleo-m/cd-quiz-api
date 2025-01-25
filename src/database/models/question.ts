import { sequelize } from "../config";

const { DataTypes } = require("sequelize");

export const Question = sequelize.define("question", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quizId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "quizzes",
      key: "id",
    },
  },
  correctAnswerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "answers",
      key: "id",
    },
  },
  label: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
