import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import { router } from "./router";

const app: Application = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(router);

export { app };
