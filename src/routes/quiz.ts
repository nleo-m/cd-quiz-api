import { Request, Response, Router } from "express";
import QuizController from "../controllers/quizController";

export const quizRouter = Router();

quizRouter.get("/", async (req: Request, res: Response) => {
  new QuizController().getQuizzes(req, res);
});

quizRouter.get("/:id", async (req: Request, res: Response) => {
  new QuizController().getQuiz(req, res);
});

quizRouter.post("/:id", async (req: Request, res: Response) => {
  new QuizController().verifyQuiz(req, res);
});
