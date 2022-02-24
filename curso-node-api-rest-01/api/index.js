const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');
const { acceptedFormats } = require('./Serializer');

app.use(bodyParser.json());
app.use( (req, res, next) => {
    let requestedFormat = req.header('Accept');
    
    if (requestedFormat === '*/*') {
        requestedFormat = 'application/json';
    }
    
    if (acceptedFormats.indexOf(requestedFormat) === -1) {
        res.status(406);
        res.end();
        return;
    }

    res.setHeader('Content-Type', requestedFormat);
    next();
})

const routesProviders = require('./routes/provides');
const NotFount = require('./errors/NotFound');
const InvalidField = require('./errors/InvalidField');

app.use('/api/providers', routesProviders);
app.use((error, req, res, next) => {
    let status = 500;

    if (error instanceof NotFount) {
        status = 404;
    } else if (error instanceof InvalidField || error instanceof DataNotFound) {
        status = 400;
    } else if (error instanceof UnsupportedValue) {
        status = 406;
    }

    res.status(status).json({
        message: error.message
    })
})

app.listen(config.get('api.porta'), () => {
    console.log('ok')
})
