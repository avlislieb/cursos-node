import crypto from 'crypto';

export abstract class Entity <T> {
    protected _id: string;
    protected createdAt: Date;
    protected props: T;

    get id() {
        return this._id;
    }

    constructor(props: T, id?: string, createdAt?: Date) {
        this.props = props;
        this._id = id ?? crypto.randomUUID();
        this.createdAt = createdAt ?? new Date();
    }
}