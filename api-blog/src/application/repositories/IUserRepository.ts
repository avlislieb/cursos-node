import { User } from "../../domain/entities/user";


export interface IUserRepository {
    findById(email: string): Promise<User>;
    save(user: User): Promise<void>;
}