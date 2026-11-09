import express from "express";
import type { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./routes/userRoute";
import postRouter from "./routes/postRoute";

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use("/api", userRouter);
app.use("/api", postRouter);

app.listen(PORT, () => {
  console.log("SERVIDOR CORRIENDO EN http://localhost:3000");
});
