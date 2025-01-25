import { Answer } from "../answer";
import { Question } from "../question";

Question.hasMany(Answer, { as: "answers" });
Answer.belongsTo(Question, { as: "question" });
