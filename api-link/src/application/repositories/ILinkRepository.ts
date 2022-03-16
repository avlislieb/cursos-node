import { Link } from "../../domain/entities/link";


export interface ILinkRepository {
    findById(id: string): Promise<Link | null>
    save(link: Link): Promise<Link>
}