class DataNotFound extends Error {
    constructor () {
        super('Not found data for update.');
        this.name = "DataNotFound";
        this.idErro = 2
    }
}