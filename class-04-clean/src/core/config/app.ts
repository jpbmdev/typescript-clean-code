import express from "express";
import { config as dotenv } from "dotenv";
import initRoutes from "./routes";
import initMiddlewares from "./middlewares";

dotenv();

const app = express();

initMiddlewares(app);

initRoutes(app);

export default app;
