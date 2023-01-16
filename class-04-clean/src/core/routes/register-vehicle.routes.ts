import { Router } from "express";

const createRouter = (router: Router): void => {
  router.post("/register-vehicle", (req, res) => {
    res.send(req.body);
  });
};

export default createRouter;
