import { Request, Response } from "express";
import { Quiz } from "../database/models/quiz";

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
}

export default QuizController;
