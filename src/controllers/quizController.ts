import { Request, Response } from "express";
import { Quiz } from "../database/models/quiz";
import { Question } from "../database/models/question";
import { Answer } from "../database/models/answer";
import { question } from "../types/question";

class QuizController {
  constructor() {}

  async getQuizzes(req: Request, res: Response) {
    try {
      const quizzes = await Quiz.findAll();
      return res.status(200).json(quizzes);
    } catch (error) {
      console.log("Error fetching quizzes: " + error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async getQuiz(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const quiz = await Quiz.findByPk(id, {
        include: {
          model: Question,
          attributes: ["id", "label"],
          include: { model: Answer, attributes: ["id", "label"] },
        },
      });

      if (!quiz) return res.status(404).json({ message: "Quiz not found." });

      return res.status(200).json(quiz);
    } catch (error) {
      console.log("Error fetching quiz: " + error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }

  async verifyQuiz(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const answers = req.body;

      const quiz = await Quiz.findByPk(id, {
        include: {
          model: Question,
          attributes: ["id", "label", "correctAnswerId"],
          include: { model: Answer, attributes: ["label"] },
        },
      });

      if (!quiz) return res.status(404).json({ message: "Quiz not found." });

      const total = quiz.questions.length || 0;

      let questionsAnswered = 0;
      let correctAnswers = 0;

      for (let answer of answers) {
        const question = quiz.questions.find(
          (q: question) => q?.id == answer.questionId
        );

        if (question) {
          questionsAnswered += 1;
          if (question.correctAnswerId == answer?.answerId) correctAnswers += 1;
        }
      }

      const percentage = (correctAnswers / total) * 100;

      const response = {
        total: total,
        questionsAnswered: questionsAnswered,
        correctAnswers: correctAnswers,
        percentage: percentage,
      };

      return res.status(200).json(response);
    } catch (error) {
      console.log("Error verifying quiz: " + error);
      return res.status(500).json({ message: "Internal server error." });
    }
  }
}

export default QuizController;
