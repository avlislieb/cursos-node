import { Entity } from "../../core/domain/Entity";
import bcrypt from 'bcryptjs';


type LinkProps = {
    link: string,
    long_url: string,
    userId: string;
}

export class Link extends Entity<LinkProps> {

    private constructor(props: LinkProps, id?: string) {
        super(props, id);
    }

    static async create(props: LinkProps, id?: string) {
        const link = new Link(props, id);

        return link;
    }
}