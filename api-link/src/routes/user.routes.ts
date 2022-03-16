import { Router } from "express";
import { createUserController } from "../application/usecases/users/createUser";

const userRouter = Router();

userRouter.post('/', (req, res) => {
    createUserController.handle(req, res);
});

export {
    userRouter
}