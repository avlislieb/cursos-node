import { User } from "../../../domain/entities/user";
import { IUserRepository } from "../IUserRepository";


export class PostgresUserRepository implements IUserRepository {
    private users: User[] = [];

    async findById(id: string): Promise<User | null> {
        const user = this.users.find(user => user.entityId === id);
        return user || null;
    }

    async save(user: User): Promise<User> {
        this.users.push(user);
        return user;
    }
}