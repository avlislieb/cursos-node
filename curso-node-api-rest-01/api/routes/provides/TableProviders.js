const Model = require('./ModelTableProviders');



module.exports = {
    list () {
        return Model.findAll();
    },
    insert (provider) {
        return Model.create(provider);
    },
    async findById (id) {
        const result = await Model.findOne({
            where: {
                id: id
            }
        });

        if (!result) {
            throw new Error('Provider not found.')
        }

        return result;
    },
    update(id, dataUpdate) {
        return Model.update(
            dataUpdate,
            {
                where: { id: id }
            }
        )
    }
}