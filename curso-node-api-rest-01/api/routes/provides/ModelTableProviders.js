const Sequelize = require('sequelize');
const instance = require('../../database');

const columns = {
    company: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    category: {
        type: Sequelize.ENUM('reção', 'brinquedo'),
        allowNull: false
    }   
}

const options = {
    freezeTableName: true,
    tableName: 'providers', 
    timestamps: true,
    version: 'version'
}

module.exports = instance.define('providers', columns, options)
