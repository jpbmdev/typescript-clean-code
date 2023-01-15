import { Router } from "express";

const createRouter = (router: Router): void => {
  router.post("/register-vehicle", (req, res) => {
    res.send(200);
  });
};

export default createRouter;
