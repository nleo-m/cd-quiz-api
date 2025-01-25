import { Request, Response } from "express";
import * as dotenv from "dotenv";

dotenv.config();

const express = require("express");
const app = express();
const port = process.env.SERVER_PORT || 4000;

app.get("/status", (req: Request, res: Response) => {
  res.send("Codi quiz api running successfully!");
});

app.listen(port, () => {
  console.log(`Codi quiz listening on port ${port}`);
});
