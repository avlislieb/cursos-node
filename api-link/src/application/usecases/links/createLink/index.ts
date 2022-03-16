import { PrismaLinkUserRepository } from "../../../repositories/implementations/links/PrismaLinkUserRepository";
import { PostgresUserRepository } from "../../../repositories/implementations/PostgresUserRepository";
import { PrismaUserRepository } from "../../../repositories/implementations/users/PrismaUserRepository";
import { CreateLinkUser } from "./CreateLinkUser";
import { CreateLinkUserController } from "./CreateLinkUserController";

const userRepository = new PrismaUserRepository();
const linkUserRepository = new PrismaLinkUserRepository();

const createLinkUser = new CreateLinkUser(userRepository, linkUserRepository);
const createLinkUserController = new CreateLinkUserController(createLinkUser);

export {
    createLinkUser,
    createLinkUserController
}