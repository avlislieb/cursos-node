const attendance = require("../models/attendance");


module.exports = app => {
    app.get('/atendimento', (request, response) => {
        attendance.list()
            .then((results) => response.json(results))
            .catch((error) => response.status(400).json(error));

    });

    app.get('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        attendance.findById(id)
            .then((result) => res.json(result))
            .catch((error) => res.status(400).json(error));
    });

    app.post('/atendimento', (req, res) => {
        const service = req.body;
        attendance.add(service)
            .then(attendanceCreated => {
                res.status(201).json(attendanceCreated);
            })
            .catch(errors => {
                res.status(400).json(errors);
            });
    });

    app.patch('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        const values = req.body;
        attendance.update(id, values)
            .then(result => res.json(result))
            .catch(error => res.status(400).json(error));
    });

    app.delete('/atendimento/:id', (req, res) => {
        const id = parseInt(req.params.id);
        attendance.delete(id)
            .then(result => res.status(204).json(result))
            .catch(error => res.status(400).json(error));
    })
}