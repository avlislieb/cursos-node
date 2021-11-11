const connection = require('../infra/database/connection');
const query = require('../infra/database/queries');
const moment = require('moment');
const axios = require('axios');

class Attendance {
    add(service) {
        const sql = "INSERT INTO attendances SET ?"

        return query(sql, service);
    }

    list() {
        const sql = 'SELECT * FROM attendances';
        return query(sql);
    }

    findById(id) {
        const sql = `SELECT * FROM attendances WHERE id=${id}`;
        return query(sql);
    }

    update(id, service) {
        const sql = 'UPDATE attendances SET ? WHERE id=?';

        return query(sql, [service, id]);
    }

    delete(id) {
        const sql = `DELETE FROM attendances WHERE id = ${id}`;
        return query(sql);
    }
}

module.exports = new Attendance;