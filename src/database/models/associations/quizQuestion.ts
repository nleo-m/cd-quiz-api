import { Question } from "../question";
import { Quiz } from "../quiz";

Quiz.hasMany(Question);
Question.belongsTo(Quiz);
