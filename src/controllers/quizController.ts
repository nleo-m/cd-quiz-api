import { Request, Response } from "express";
import { Quiz } from "../database/models/quiz";
import { Question } from "../database/models/question";
import { Answer } from "../database/models/answer";

class QuizController {
  constructor() {}

  async getQuizzes(req: Request, res: Response) {
    try {
      const quizzes = await Quiz.findAll();
      res.status(200).json(quizzes);
    } catch (error) {
      console.log("Error fetching quizzes: " + error);
      res.status(500).json({ message: "Error fetching quizzes." });
    }
  }

  async getQuiz(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const quiz = await Quiz.findByPk(id, {
        include: {
          model: Question,
          attributes: ["id", "label"],
          include: { model: Answer, attributes: ["label"] },
        },
      });

      res.status(200).json(quiz);
    } catch (error) {
      console.log("Error fetching quiz: " + error);
      res.status(500).json({ message: "Error fetching quiz." });
    }
  }
}

export default QuizController;
