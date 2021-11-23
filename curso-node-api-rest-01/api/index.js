const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const config = require('config');

app.use(bodyParser.json());

const routesProviders = require('./routes/provides');
app.use('/api/providers', routesProviders);

app.listen(config.get('api.porta'), () => {
    console.log('ok')
})
