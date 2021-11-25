const router = require('express').Router();
const ModelTable = require('./TableProviders');
const Provider = require('./Provider')

router.get('/', async (req, res) => {
    const result = await ModelTable.list();
    res.json(result)
});

router.post('/', async (req, res) => {
    const data = req.body;
    const objProvider = new Provider(data);
    await objProvider.store(objProvider);
    res.status(201).json(objProvider);
});

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const objProvider = new Provider(req.params);
        await objProvider.findById();
        res.json(objProvider);
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log('data', );
        
        const objProvider = new Provider({...data, id});
        await objProvider.update();
        res.json(objProvider)
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
});
module.exports = router;