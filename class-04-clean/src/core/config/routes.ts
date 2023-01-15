/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Express, Router } from "express";
import fg from "fast-glob";

const initRoutes = (app: Express) => {
  const router = Router();
  app.use("/api", router);

  fg.sync("**/src/core/routes/**.routes.ts").map(async (file) =>
    (await import(`../../../${file}`)).default(router)
  );
};

export default initRoutes;
