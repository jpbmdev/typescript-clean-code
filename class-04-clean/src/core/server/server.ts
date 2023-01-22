/* eslint-disable @typescript-eslint/no-floating-promises */
import { config as dotenv } from "dotenv";
import connectMongoDB from "../../infrastructure/db/mongodb.connection";
import { initApp } from "../config/app";

dotenv();
const port = process.env.PORT ?? "3000";
const mongoUrl = process.env.MONGO_URL ?? "";

(async (): Promise<void> => {
  await connectMongoDB(mongoUrl);
  initApp(port);
})();
