const router = require('express').Router();
const animal = require('../models/Animal.model');


// router.get('/', (req, res, next) => {
//     res.json('All good in here');
// });

router.get("/", async (req, res, next) => {
    const animals = await animal.find();

    res.json(animals);

});


router.get("/:id", isAuthenticated, async (req, res, next) => {
    try {
        const { id } = req.params;
        const animal = await animal.findById

        res.jason(animal);
    } catch (error) {
        res.status(404).json({ message: "animal not found" });
    }
});


router.post('/', async (req, res, next) => {
    const body = req.body;
    console.log(body);
    const animal = await animal.create(body);

    res.status(201).json(animal);

});


module.exports = router;

