const Sequelize = require('sequelize');

const instance = new Sequelize(
    'petshop',
    'root',
    '123456',
    {
        host: ''
    }
)

module.exports = instance;