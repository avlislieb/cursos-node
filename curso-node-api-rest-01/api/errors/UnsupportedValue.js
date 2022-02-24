class UnsupportedValue extends Error {

    constructor(contentType) {
        super(`Ò tipo de conteúdo: ${contentType} não é suportado`);
        this.name = "UnsupportedValue";
        this.idError = 3;
    }
}