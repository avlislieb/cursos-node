import { Link } from "../../../../domain/entities/link";
import { ILinkRepository } from "../../../repositories/ILinkRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";



type CreateLinkUserRequest = {
    id?: string,
    link: string,
    long_url: string,
    userId: string
}

export class CreateLinkUser {

    constructor(
        private userRepository: IUserRepository,
        private linkUserRepository: ILinkRepository
    ) {}

    async execute({ id, link, long_url, userId }: CreateLinkUserRequest) {
        const user = await this.userRepository.findById(userId);
        
        if (!user) {
            throw new Error('User does not exists.');
        }
        
        const linkUser = await Link.create({
            link: link,
            long_url: long_url,
            userId: userId
        }, id);
        console.log('linkUser', linkUser);
        const linkCreated = await this.linkUserRepository.save(linkUser);

        return linkCreated;
    }
}