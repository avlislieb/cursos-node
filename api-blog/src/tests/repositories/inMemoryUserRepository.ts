import { IUserRepository } from "../../application/repositories/IUserRepository";
import { User } from "../../domain/entities/user";


export class InMemoryUserRepository implements IUserRepository {
    public users: User[] = [];

    async findById(id: string): Promise<User> {
        const user = this.users.find(user => user.id === id);
        return user;
    }

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}