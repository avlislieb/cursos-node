import { prismaClient } from "../../../../database/prismaClient";
import { Link } from "../../../../domain/entities/link";
import { ILinkRepository } from "../../ILinkRepository";


export class PrismaLinkUserRepository implements ILinkRepository {

    async findById(id: string): Promise<Link | null> {
        const link = await prismaClient.link.findUnique({
            where: {
                id: id
            }
        });

        if (!link) {
            return null;
        }

        return Link.create(link, link.id);
    }

    async save(link: Link): Promise<Link> {
        const linkCreated = await prismaClient.link.create({
            data: {
                id: link.entityId,
                link: link.props.link,
                long_url: link.props.long_url,
                userId: link.props.userId
            }
        });

        return Link.create(linkCreated, linkCreated.id);
    }
}