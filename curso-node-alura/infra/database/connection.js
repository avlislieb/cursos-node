const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: '172.30.0.20',
    port: '3306',
    user: 'root',
    password: 'badah',
    database: 'agenda_petshop',
});

module.exports = conexao;
