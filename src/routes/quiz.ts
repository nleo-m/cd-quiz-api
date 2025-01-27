import { Request, Response, Router } from "express";
import QuizController from "../controllers/quizController";

export const quizRouter = Router();

/**
 * @openapi
 * /quiz:
 *   get:
 *     description: List all quizzes.
 *     responses:
 *       200:
 *         description: Returns an array containing quizzes.
 *         content:
 *           application/json:
 *             examples:
 *               success:
 *                 summary: Example of a successful response
 *                 value:
 *                   - id: 1
 *                     name: "Conceitos e lógica de programação"
 *                     createdAt: "2025-01-25T23:01:39.000Z"
 *                     updatedAt: "2025-01-25T23:01:39.000Z"
 *                   - id: 2
 *                     name: "Teste seu nível de conhecimento com Javascript"
 *                     createdAt: "2025-01-25T23:01:39.000Z"
 *                     updatedAt: "2025-01-25T23:01:39.000Z"
 *       500:
 *          description: Internal Server Error.
 *          content:
 *           application/json:
 *             examples:
 *               error:
 *                 value:
 *                   - message: "Error fetching quizzes."
 */
quizRouter.get("/", async (req: Request, res: Response) => {
  new QuizController().getQuizzes(req, res);
});

/**
 * @openapi
 * /quiz/{id}:
 *   get:
 *     description: Retrieve a specific quiz by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the quiz to retrieve.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Returns the quiz object.
 *         content:
 *           application/json:
 *             examples:
 *                success:
 *                 summary: Example of a successful response
 *                 value:
 *                   id: 49
 *                   name: "Conceitos e lógica de programação"
 *                   createdAt: "2025-01-25T23:01:39.000Z"
 *                   updatedAt: "2025-01-25T23:01:39.000Z"
 *                   questions:
 *                     - id: 181
 *                       label: "Qual é o principal objetivo de um algoritmo?"
 *                       answers:
 *                         - label: "b) Resolver um problema através de uma sequência de passos lógicos."
 *                         - label: "c) Executar tarefas repetitivas em um sistema."
 *                         - label: "a) Armazenar dados em uma estrutura de dados."
 *                         - label: "d) Organizar informações em uma tabela."
 *                     - id: 182
 *                       label: "O que é uma variável em programação?"
 *                       answers:
 *                         - label: "b) Um espaço na memória que armazena um valor."
 *                         - label: "a) Um tipo de função que retorna dados."
 *                         - label: "c) Um tipo de estrutura de dados usada para armazenar listas."
 *                         - label: "d) Um comando de controle de fluxo."
 *       404:
 *         description: Quiz not found.
 *         content:
 *           application/json:
 *             examples:
 *               notFound:
 *                 summary: Example of a 404 response
 *                 value:
 *                   message: "Quiz not found."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             examples:
 *               error:
 *                 summary: Example of a 500 response
 *                 value:
 *                   message: "Internal Server Error."
 */
quizRouter.get("/:id", async (req: Request, res: Response) => {
  new QuizController().getQuiz(req, res);
});

/**
 * @openapi
 * /quiz/{id}:
 *   post:
 *     description: Submit answers for a specific quiz and get the results.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the quiz to verify answers for.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: array
 *             description: Array of answers submitted for the quiz.
 *             items:
 *               type: object
 *               properties:
 *                 questionId:
 *                   type: integer
 *                   description: The ID of the question being answered.
 *                 answerId:
 *                   type: integer
 *                   description: The ID of the selected answer.
 *               example:
 *                 questionId: 1
 *                 answerId: 1
 *           examples:
 *             exampleBody:
 *               summary: Example request body
 *               value:
 *                 - questionId: 1
 *                   answerId: 1
 *                 - questionId: 2
 *                   answerId: 2
 *                 - questionId: 181
 *                   answerId: 720
 *     responses:
 *       200:
 *         description: Returns the result of the quiz.
 *         content:
 *           application/json:
 *             examples:
 *               success:
 *                 summary: Example of a successful response
 *                 value:
 *                   total: 5
 *                   questionsAnswered: 2
 *                   correctAnswers: 0
 *                   percentage: 0
 *       404:
 *         description: Quiz not found.
 *         content:
 *           application/json:
 *             examples:
 *               notFound:
 *                 summary: Example of a 404 response
 *                 value:
 *                   message: "Quiz not found."
 *       500:
 *         description: Internal Server Error.
 *         content:
 *           application/json:
 *             examples:
 *               error:
 *                 summary: Example of a 500 response
 *                 value:
 *                   message: "Internal Server Error."
 */
quizRouter.post("/:id", async (req: Request, res: Response) => {
  new QuizController().verifyQuiz(req, res);
});
