import { Request, Response } from "express";
import * as dotenv from "dotenv";

import { startDatabase } from "./database";
import { quizRouter } from "./routes/quiz";

import cors from "cors";

dotenv.config();

const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Codi quiz API",
      version: "1.0.0",
    },
  },
  apis: ["./src/routes/*.ts"],
};

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 4000;

app.get("/status", (req: Request, res: Response) => {
  res.send("Codi quiz api running successfully!");
});

var corsOptions = {
  origin: process.env.FRONT_END_URL,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());
const swaggerSpec = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/quiz", quizRouter);

app.listen(port, async () => {
  try {
    await startDatabase();
    console.log(`Codi quiz listening on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
