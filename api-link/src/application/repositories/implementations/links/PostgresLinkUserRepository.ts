import { Link } from "../../../../domain/entities/link";
import { ILinkRepository } from "../../ILinkRepository";


export class PostgresLinkUserClass implements ILinkRepository {
    private links: Link[] = [];

    async findById(id: string): Promise<Link | null> {
        const link = this.links.find(link => link.entityId === id);

        if (!link) {
            return null;
        }
        return link;
    }

    async save(link: Link): Promise<void> {
        await this.links.push(link);
    }
}