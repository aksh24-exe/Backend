import { Router } from "express";

const userRouter = Router();

userRouter.get("/get-all-user", (req, res) => {
  res.send("get all user");
});

userRouter.get("/get-user", (req, res) => {
  res.send("get all user");
});

userRouter.get("/greet-user", (req, res) => {
  res.send("get all user");
});

export default userRouter;
