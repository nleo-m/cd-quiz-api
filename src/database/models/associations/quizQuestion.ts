import { Question } from "../question";
import { Quiz } from "../quiz";

Quiz.hasMany(Question, { as: "questions" });
Question.belongsTo(Quiz, { as: "quiz" });
