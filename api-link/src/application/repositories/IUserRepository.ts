import { User } from "../../domain/entities/user";


export interface IUserRepository {
    findById(id: string): Promise<User | null>
    save(user: User): Promise<User>
}