import express from "express";
import userRouter from "../routes/userRoute";

export const createServer = () => {
  try {
    const app = express();
    app.use(express.json());

    app.use(userRouter);

    return app;
  } catch (error) {
    console.log(error);
  }
};
