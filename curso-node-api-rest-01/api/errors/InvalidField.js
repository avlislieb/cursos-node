class InvalidField extends Error {
    constructor (campo) {
        const message = `O campo ${campo} esta inválido`;
        super(message);
        this.name = 'InvalidField';
        this.idError = 1;
    }
}

module.exports = InvalidField;