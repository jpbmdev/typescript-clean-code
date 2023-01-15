import express from "express";
import { config as dotenv } from "dotenv";
import initRoutes from "./routes";

dotenv();

const app = express();

initRoutes(app);

export default app;
