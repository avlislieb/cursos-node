interface IAdresses {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAdresses;
    from: IAdresses;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
} 