const router = require("express").Router();
const Animal = require("../models/Animal.model");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/isAuthenticated");

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

router.post("/animals", async (req, res, next) => {
  const { name, type, size, medical, passport, vaccines } = req.body;
  console.log(body);
  const animal = await animal.create(body);

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

router.delete("/animals/:id", async (req, res, next) => {
  const { id } = req.params;
  const animal = await animal.findByIdAndDelete(id);

  res.json(animal);
});

module.exports = router;
