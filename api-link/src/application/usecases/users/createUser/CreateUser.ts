import { User } from "../../../../domain/entities/user";
import { IUserRepository } from "../../../repositories/IUserRepository";



type CreateUserRequest = {
    name: string,
    email: string,
    password: string,
}

export class CreateUser {

    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute({ name, email, password }: CreateUserRequest) {
        const user = await User.create({
            name: name,
            email: email,
            password: password
        });

        await this.userRepository.save(user);
        return user;
    }
}