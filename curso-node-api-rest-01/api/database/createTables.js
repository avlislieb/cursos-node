const ModelTableProvider = require('../routes/provides/ModelTableProviders');

ModelTableProvider
    .sync()
    .then(() => console.log('providers table created successfully'))
    .catch(console.log('creation of providers table failed'))