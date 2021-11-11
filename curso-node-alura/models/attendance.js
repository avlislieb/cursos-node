const connection = require('../infra/database/connection');
const moment = require('moment');
const axios = require('axios');
const repository = require('../repositories/attendance');

class Attendance {

    constructor () {
        
        this.dateIsValid = ({date, created_at}) => moment(date).isSameOrAfter(created_at);
        this.clientIsValid = ({ clientLength }) => clientLength >= 5;

        this.valid = params => this.validations.filter(field => {
            const { name } = field;
            const param = params[name];
            return !field.valid(param);
        })

        this.validations = [
            {
                name: 'date',
                valid: this.dateIsValid,
                message: 'Data deve ser maior ou igual a data atual',
            },
            {
                name: 'client',
                valid: this.clientIsValid,
                message: 'Nome do cliente deve ter pelo menos 5 caracteres',
            }
        ]
    }

    add(service) {
        const created_at = moment().format('YYYY-MM-DD HH:mm:ss');
        const date = moment(service.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');

        console.log('service.client.length', service.client.length, service.client.length >=5 );
        const params = {
            date: { date, created_at },
            client: { clientLength: service.client ? service.client.length : 0 }
        }

        const errors = this.valid(params);
    
        if (errors.length) {
            return new Promise((resolve, reject) => reject(errors));
        } else {
            const atendimentoDatado = {...service, created_at, date};
            return repository.add(atendimentoDatado)
                .then((results) => {
                    const id = results.insertId;
                    return { ...atendimentoDatado, id };
                });
            
        }
    }

    list() {
        return repository.list();
    }

    findById(id) {
        const sql = `SELECT * FROM attendances WHERE id=${id}`;

        
        return repository.findById(id)
            .then(async (result) => {
                console.log('result', result);
                const attendance = result[0];
                const cpf = attendance.client;
                const { data } = await axios.get(`http://localhost:3003/${cpf}`);
                attendance.client = data;
                return attendance;
            });
    }

    update(id, service) {
        const sql = 'UPDATE attendances SET ? WHERE id=?';

        if (service.date) {
            service.date = moment(service.date, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss');
        }

        return repository.update(id, service)
            .then(result => {
                return this.findById(id);
            });

        connection.query(sql, [valores, id], (error, result) => {
            if (error) {
                res.status(400).json(error)
            } else {
                res.status(200).json({...valores, id});
            }
        })
    }

    delete(id) {
        return repository.delete(id);
    }
}

module.exports = new Attendance;