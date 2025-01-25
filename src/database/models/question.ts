import { sequelize } from "../config";

const { DataTypes } = require("sequelize");

export const Question = sequelize.define("question", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  quiz_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "quizzes",
      key: "id",
    },
  },
  correct_answer_id: {
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
