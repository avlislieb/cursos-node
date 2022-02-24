const Model = require('./ModelTableProviders');
const NotFound = require('../../errors/NotFound');

module.exports = {
    list () {
        return Model.findAll({ raw: true });
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
            throw new NotFound() 
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
    },
    delete(id) {
        return Model.destroy({
            where: {id: id}
        })
    }
}