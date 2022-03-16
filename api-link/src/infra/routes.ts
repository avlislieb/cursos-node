import { Router } from "express";
import { linkRouter } from "../routes/link-user.routes";
import { userRouter } from "../routes/user.routes";

const router = Router();

router.use('/users', userRouter);
router.use('/links', linkRouter);

export {
    router
};