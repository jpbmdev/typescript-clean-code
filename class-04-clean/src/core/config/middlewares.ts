import { Express } from "express";
import { bodyParser, addCors } from "../middlewares";

const initMiddlewares = (app: Express): void => {
  app.use(bodyParser);
  app.use(addCors);
};

export default initMiddlewares;
