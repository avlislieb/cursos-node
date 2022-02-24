class NotFount extends Error {

    constructor () {
        super('Provider not found.');
        this.name = "NotFound";
        this.status = 0;
    }
}

module.exports = NotFount;