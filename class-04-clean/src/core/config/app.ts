import express from "express";
import initRoutes from "./routes";
import initMiddlewares from "./middlewares";

const app = express();

const initApp = (port: string): void => {
  initMiddlewares(app);

  initRoutes(app);

  app.listen(port, () => {
    console.log(`server is working: ${port}`);
  });
};

export { initApp, app };
