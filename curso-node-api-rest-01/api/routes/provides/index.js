const router = require('express').Router();
const ModelTable = require('./TableProviders');

router.use('/', async (req, res) => {
    const result = await ModelTable.list();
    res.json(result)
    
    
});

module.exports = router;