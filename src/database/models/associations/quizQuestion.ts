import { Question } from "../question";
import { Quiz } from "../quiz";

Quiz.hasMany(Question, { as: "questions", foreignKey: "quiz_id" });
Question.belongsTo(Quiz, { as: "quiz", foreignKey: "quiz_id" });
