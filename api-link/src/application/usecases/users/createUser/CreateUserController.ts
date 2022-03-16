import { Request, response, Response } from "express";
import { CreateUser } from "./CreateUser";


export class CreateUserController {

    constructor(
        private createUser: CreateUser
    ) {}

    async handle(req: Request, res: Response) {
        const { name, email, password } = req.body;
       
        try {
            const result = await this.createUser.execute({
                name, email, password
            });

            return res.status(201).json({
                message: 'User created.',
                result
            });
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error.',
            });
        }
    }
}