import { Post } from "../../domain/entities/post";


export interface IPostRepository {
    findByEmail(email: string): Promise<Post>;
    save(post: Post): Promise<void>;
}