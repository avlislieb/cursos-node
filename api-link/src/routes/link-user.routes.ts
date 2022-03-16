import { Router } from "express";
import { createLinkUserController } from "../application/usecases/links/createLink"; 

const linkRouter = Router();

linkRouter.post('/', (req, res) => {
    createLinkUserController.handle(req, res);
});

export {
    linkRouter
}