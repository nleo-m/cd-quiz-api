import { Answer } from "../answer";
import { Question } from "../question";

Question.hasMany(Answer, { onDelete: "CASCADE" });
Answer.belongsTo(Question, { onDelete: "CASCADE" });
