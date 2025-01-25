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

      const total = quiz.questions.length || 0;

      const questionsAnswered = answers.length || 0;

      let correctAnswers = 0;
      for (let answer of answers) {
        const question = quiz.questions.find(
          (q: question) => q?.id == answer.questionId
        );

        if (question.correctAnswerId == answer?.answerId) correctAnswers += 1;
      }

      const percentage = (correctAnswers / total) * 100;

      const response = {
        total: total,
        questionsAnswered: questionsAnswered,
        correctAnswers: correctAnswers,
        percentage: percentage,
      };

      res.status(200).json(response);
    } catch (error) {
      console.log("Error verifying quiz: " + error);
      res.status(500).json({ message: "Error verifying quiz." });
    }
  }
}

export default QuizController;
