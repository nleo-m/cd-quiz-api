import { Request, Response, Router } from "express";
import QuizController from "../controllers/quizController";

export const quizRouter = Router();

quizRouter.get("/", async (req: Request, res: Response) => {
  return new QuizController().getQuizzes(req, res);
});

quizRouter.get("/:id", async (req: Request, res: Response) => {
  return new QuizController().getQuiz(req, res);
});

quizRouter.post("/", async (req: Request, res: Response) => {
  res.send("Post quiz answers!");
});
