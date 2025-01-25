import { Request, Response } from "express";
import * as dotenv from "dotenv";

import { startDatabase } from "./database";
import { quizRouter } from "./routes/quiz";

dotenv.config();

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 4000;

app.get("/status", (req: Request, res: Response) => {
  res.send("Codi quiz api running successfully!");
});

app.use("/quiz", quizRouter);

app.listen(port, async () => {
  try {
    await startDatabase();
    console.log(`Codi quiz listening on port ${port}`);
  } catch (e) {
    console.log(e);
  }
});
