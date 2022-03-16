import { Request, Response } from "express";
import { ILinkRepository } from "../../../repositories/ILinkRepository";
import { CreateLinkUser } from "./CreateLinkUser";



export class CreateLinkUserController {

    constructor(
        private createLinkUser: CreateLinkUser
    ) {}

    async handle(req: Request, res: Response) {
        const { link, long_url, userId, id } = req.body;

        try {
            const result = await this.createLinkUser.execute({
                link: link,
                long_url: long_url,
                userId: userId,
                id: id || null
            });

            return res.status(201).json({
                message: 'Link created.',
                result
            })
        } catch (error) {
            return res.status(400).json({
                message: error.message || 'Unexpected error',
               
            })
        }


        // const user = await this.linkRepository.save({

        // })
    }
}