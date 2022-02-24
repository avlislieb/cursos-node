const InvalidField = require("../../errors/InvalidField");
const TableProviders = require("./TableProviders");

class Provider {

    constructor ({ id, company, email, category, createdAt, updatedAt, version }) {
        this.id = id;
        this.company = company;
        this.email = email;
        this.category = category;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.version = version;
    }

    async store () {
        this.valid();
        console.log('this.category', this.category);
        const result = await TableProviders.insert({
            company: this.company,
            email: this.email,
            category: this.category
        })
        .catch(error => console.log('error', error));
        
        this.id = result.id;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
        this.version = result.version;
    }

    async findById () {
        const result = await TableProviders.findById(this.id);

        this.id = result.id;
        this.company = result.company;
        this.email = result.email;
        this.category = result.category;
        this.createdAt = result.createdAt;
        this.updatedAt = result.updatedAt;
        this.version = result.version;
    }

    async update () {
        await TableProviders.findById(this.id);
        const fields = ['company', 'email', 'category'];
        const dataUpdate = {};

        fields.forEach((field) => {
            const value = this[field];

            if (typeof value === 'string' && value.length > 0) {
                dataUpdate[field] = value;
            }
        });
        
        if (Object.keys(dataUpdate).length === 0) {
            throw new DataNotFound();
        }

        await TableProviders.update(this.id, dataUpdate);
    }

    async destroy () {
        await TableProviders.findById(this.id);
        return await TableProviders.delete(this.id);
    }

    valid () {
        const fields = ['company', 'email', 'category'];

        fields.forEach((field) => {
            const value = this[field];

            if (typeof value !== 'string' || value.length === 0) {
                // throw new Error(`The ${field} field is invalid`)
                throw new InvalidField(field);
            }
        });
    }
}

module.exports = Provider;