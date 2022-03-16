import { PostgresUserRepository } from "../../../repositories/implementations/PostgresUserRepository";
import { PrismaUserRepository } from "../../../repositories/implementations/users/PrismaUserRepository";
import { CreateUser } from "./CreateUser";
import { CreateUserController } from "./CreateUserController";

// const postgresUserRepository = new PostgresUserRepository();
const prismaUserRepository = new PrismaUserRepository();

const createUser = new CreateUser(prismaUserRepository);

const createUserController = new CreateUserController(createUser);

export {
    createUser,
    createUserController
}