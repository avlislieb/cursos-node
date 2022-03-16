import crypto from 'crypto';

export abstract class Entity<T> {
    protected id: string;
    protected createdAt: Date;
    public props: T;

    get entityId() {
        return this.id
    }

    constructor(props: T, id?: string) {
        this.props = props;
        this.id = id ?? crypto.randomUUID();
        this.createdAt = new Date();
    }
}