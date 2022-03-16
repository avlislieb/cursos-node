import { prisma } from "@prisma/client";
import { prismaClient } from "../../../../database/prismaClient";
import { User } from "../../../../domain/entities/user";
import { IUserRepository } from "../../IUserRepository";


export class PrismaUserRepository implements IUserRepository {

    async findById(id: string): Promise<User | null> {
        const user = await prismaClient.user.findUnique({
            where: {
                id: id
            }
        });

        if (!user) {
            return null;
        }

        return User.create(user);
    }

    async save(user: User): Promise<User> {
        const userCreated = await prismaClient.user.create({
            data: {
                id: user.entityId,
                name: user.props.name,
                email: user.props.email,
                password: user.props.password
            }
        });

        return User.create(userCreated, userCreated.id);
    }
}