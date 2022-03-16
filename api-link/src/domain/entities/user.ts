import { Entity } from "../../core/domain/Entity";
import bcrypt from 'bcryptjs';


type UserProps = {
    name: string,
    email: string,
    password: string;
}

export class User extends Entity<UserProps> {

    private constructor(props: UserProps, id?: string) {
        super(props, id);
    }

    static async create(props: UserProps, id?: string) {
        if (!id) {
            props.password = await bcrypt.hash(props.password, 10);
        }
        
        const user = new User(props, id);

        return user;
    }
}