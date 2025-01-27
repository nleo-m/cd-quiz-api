import { Question } from "../question";
import { Quiz } from "../quiz";

Quiz.hasMany(Question, { onDelete: "CASCADE" });
Question.belongsTo(Quiz, { onDelete: "CASCADE" });
