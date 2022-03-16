import { IUserRepository } from "../../application/repositories/IUserRepository";
import { User } from "../../domain/entities/user";


export class InMemoryUserRepository implements IUserRepository {
    public users: User[] = [];

    async findById(id: string): Promise<User | null> {
        const user = this.users.find(user => user.entityId === id);
        if (!user) {
            return null;
        }

        return user;
    }

    async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }
}