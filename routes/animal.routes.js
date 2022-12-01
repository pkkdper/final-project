const router = require("express").Router();
const Animal = require("../models/Animal.model");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const User = require("../models/User.model")

router.get("/animals", async (req, res, next) => {
  const animals = await Animal.find();

  res.json(animals);
  console.log(animals)
});

// router.get("/animals", async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     // const animal = await animal.findById(id);

//     res.json(animal);
//   } catch (error) {
//     res.status(404).json({ message: "animal not found" });
//   }
// });

//  CREATE an animal
//      /animals/animals
router.post("/", isAuthenticated , async (req, res, next) => {
  const { name, type, size, medical, passport, vaccines } = req.body;
  const animal = await Animal.create(req.body);
  const userFound = await User.findByIdAndUpdate( req.payload.userCopy._id, {$push:{animals:animal._id}}, {new:true});


  res.status(201).json(animal);
});

// UPDATE an animal

router.put("/animals/:id", async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  const animal = await animal.create(id, body, { new: true });

  res.json({ animal });
});

// DELETE an animal

router.delete("/delete/:id", async (req, res, next) => {
  const { id } = req.params;
  const animal = await animal.findByIdAndDelete(id, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Deleted : ", docs);
    }
});
  // const userUpdated = await User.findByIdAndUpdate( userid, {$push:{houses:houseid}}, {new:true});
  res.status(204).json(animal)
});


module.exports = router;