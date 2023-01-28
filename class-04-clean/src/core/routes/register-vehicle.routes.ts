/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from "express";
import { AdapterRoute } from "../adapters/express.adapter";
import { makeRegisterVehicleController } from "../factory/vehicle";

const createRouter = (router: Router): void => {
  router.post(
    "/register-vehicle",
    AdapterRoute(makeRegisterVehicleController())
  );
};

export default createRouter;
