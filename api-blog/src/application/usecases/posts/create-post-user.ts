import { Post } from "../../../domain/entities/post";
import { IUserRepository } from "../../repositories/IUserRepository";


type CreatePostUserRequest = {
    title: string;
    body: string;
    userId:string;
}

export class CreatePostUser {

    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute({ title, body, userId }: CreatePostUserRequest) {
        const user = await this.userRepository.findById(userId);

        if(!user) {
            throw new Error('User not found');
        }


        const post = Post.create({
            title,
            body,
            userId
        });

        return post;
    }
}