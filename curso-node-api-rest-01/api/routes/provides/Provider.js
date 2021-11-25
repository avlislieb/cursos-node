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
        const provider = await TableProviders.findById(this.id);
        const fields = ['company', 'email', 'category'];
        const dataUpdate = {};

        fields.forEach((field) => {
            const value = this[field];

            if (typeof value === 'string' && value.length > 0) {
                dataUpdate[field] = value;
            }
        });
        
        if (Object.keys(dataUpdate).length === 0) {
            throw new Error('Not found data for update.')
        }

        await TableProviders.update(this.id, dataUpdate);
    }
}

module.exports = Provider;