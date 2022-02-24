const UnsupportedValue = require('./errors/UnsupportedValue');

class Serializer {

    json (dados) {
        return JSON.stringify(dados);
    }

    serializer (dados) {
        if (this.contentType === 'application/json') {
            if (Array.isArray(dados)) {
                return this.json(this.filter(dados));
            }
            return this.json(this.filterObject(dados));
        }

        throw new UnsupportedValue(this.contentType);
    }

    filterObject (data) {
        const newObject = {};

        this.fieldsPublic.forEach(field => {
            if (data.hasOwnProperty(field)) {
                newObject[field] = data[field];
            }
        })

        return newObject;
    }

    filter (data) {
        const newObject = data.map(item => {
            return this.filterObject(item)
        })
        return newObject;
    }
}

class ProviderSerializer extends Serializer {
    constructor (contentType) {
        super();
        this.contentType = contentType;
        this.fieldsPublic = ['id', 'company', 'category'];
    }
}

module.exports = {
    Serializer: Serializer,
    ProviderSerializer: ProviderSerializer,
    acceptedFormats: [
        'application/json'
    ]
}