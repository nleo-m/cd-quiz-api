import { Answer } from "../answer";
import { Question } from "../question";

Question.hasMany(Answer);
Answer.belongsTo(Question);
