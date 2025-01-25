import { sequelize } from "./config";

export const startDatabase = async () => {
  await authenticate();
  await loadModels();
  await sync();
};

const authenticate = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      `Sucessfully established connection to database ${process.env.DB}`
    );
  } catch (error) {
    console.error(`Unable to connect to the database: ${error}`);
  }
};

const loadModels = async () => {
  // add models here
  require("./models/quiz");
  require("./models/question");
  require("./models/answer");

  // add associations here
  require("./models/associations/answerQuestion");
  require("./models/associations/quizQuestion");
};

const sync = async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Sucessfully synced database models");
  } catch (error) {
    console.error(`An error occurred while trying to sync database ${error}`);
  }
};
