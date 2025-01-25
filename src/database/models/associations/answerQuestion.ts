import { Answer } from "../answer";
import { Question } from "../question";

Question.hasMany(Answer, { as: "answers", foreignKey: "question_id" });
Answer.belongsTo(Question, { as: "question", foreignKey: "question_id" });
