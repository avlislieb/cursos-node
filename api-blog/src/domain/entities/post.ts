import { Entity } from "../../core/domain/Entity";

type PostProps = {
    title: string;
    body: string;
    userId:string;
}

export class Post extends Entity<PostProps> {
    private constructor(props: PostProps, id?: string) {
        super(props, id);
    }

    static create(props: PostProps, id?: string) {
        const post = new Post(props, id);

        return post;
    }
}