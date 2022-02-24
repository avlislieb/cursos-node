const router = require('express').Router();
const ModelTable = require('./TableProviders');
const Provider = require('./Provider');
// const NotFount = require('../../errors/NotFound');
const { ProviderSerializer } = require('../../Serializer');

router.get('/', async (req, res) => {
    const result = await ModelTable.list();
    const serializer = new ProviderSerializer(
        res.getHeader('Content-Type')
    )
    
    res.send(
        serializer.serializer(result)
    )
    // res.json(result)
});

router.post('/', async (req, res, next) => {
    try {
        const data = req.body;
        const objProvider = new Provider(data);
        await objProvider.store(objProvider);
        res.status(201);

        const serializer = new ProviderSerializer(
            res.getHeader('Content-Type')
        )
        res.send(
            serializer.serializer(objProvider)
        )
    } catch (error) {
        next(error)
        
    }
});

router.get('/:id', async (req, res, next) => {
    try {
        const objProvider = new Provider(req.params);
        await objProvider.findById();

        const serializer = new ProviderSerializer(
            res.getHeader('Content-Type')
        )
        res.send(
            serializer.serializer(objProvider)
        )
        // res.json(objProvider);
    } catch (error) {
        next(error);
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = req.body;
        console.log('data', );
        
        const objProvider = new Provider({...data, id});
        await objProvider.update();

        const serializer = new ProviderSerializer(
            res.getHeader('Content-Type')
        )
        res.send(
            serializer.serializer(objProvider)
        )
        // res.json(objProvider)
    } catch (error) {
        next(error);
    }
});

router.delete('/:id', async (req, res, next) => {
    try {
        const objProvider = new Provider(req.params);
        await objProvider.destroy();
        res.status(204).end();
    } catch (error) {
        next(error);
    }
    

});

module.exports = router;