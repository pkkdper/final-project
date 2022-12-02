const router = require("express").Router();
const Animal = require("../models/Animal.model");
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const User = require("../models/User.model")
const uploader = require('../middlewares/cloudinary.config.js');

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
  console.log(req.body)
  const { name, type, size, medical, passport, vaccines } = req.body;
  const animal = await Animal.create(req.body);
  const userFound = await User.findByIdAndUpdate( req.payload.userCopy._id, {$push:{animals:animal._id}}, {new:true});


  res.status(201).json(animal);
});

router.put("/:id/image", uploader.single("imageUrl"), async (req, res) => {
  console.log("hi", req.body, req.file)
  const newObj = {}
  for(const key in req.body) {
    console.log(req.body.key, req.body[key])
if (req.body[key] !== "undefined") {
  newObj[key]=req.body[key]

}
  } 
  newObj["picture"] = req.file.path
  console.log("newobj", newObj)
  // const { username, email, name, surname, picture, location, age} = req.body;
  const { id } = req.params;


  // record to database

  const animal = await Animal.findByIdAndUpdate(id, newObj, { new: true });
  console.log(animal)
  res.status(201).json({ animal });
});
// UPDATE an animal

// router.put("/animals/:id", async (req, res, next) => {
//   const { id } = req.params;
//   const body = req.body;

//   const animal = await animal.create(id, body, { new: true });

//   res.json({ animal });
// });

// DELETE an animal

router.delete("/animal/:animalid/delete/:userid", async (req, res, next) => {
  const { animalid, userid } = req.params;
  console.log("hello" , userid, animalid)
  const animal = await Animal.findByIdAndUpdate(animalid);
  const userUpdated = await User.findByIdAndUpdate( userid, {$pull:{animals:animalid}}, {new:true});
  console.log("updated user", userUpdated)
  res.status(204).json(userUpdated)
});


module.exports = router;