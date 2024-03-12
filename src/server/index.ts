import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "../routes";

// configures dotenv to work in your application
dotenv.config();
const app = express();

const PORT = process.env.PORT;

app.use(router);

app
  .listen(PORT, () => {
    console.log(`Server running at: http://127.0.0.1:${PORT}`);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
