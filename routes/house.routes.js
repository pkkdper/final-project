const router = require("express").Router();
const house = require("../models/House.model");
const User = require("../models/User.model")

// router.get("/", (req, res, next) => {
//     res.json("All good in here");
// });

router.get("/houses", async (req, res, next) => {
  const houses = await house.find();

  res.json(houses);
});

router.get("/houses/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const house = await house.findById(id);

    res.json(house);
  } catch (error) {
    res.status(404).json({ message: "house not found" });
  }
});

router.post("/houses", async (req, res, next) => {
  const body = req.body;
  console.log(body);
  const house = await house.create(body);

  res.status(201).json(house);
});

//  UPDATE a house

router.put("/houses/:id", async (req, res, next) => {
  const { id } = req.params;
  const body = req.body;

  const house = await house.findByIdAndUpdate(id, body, { new: true });

  res.json({ house });
});

//  DELETE a house

router.delete("/houses/:id", async (req, res, next) => {
  const { id } = req.params;
  const house = await house.findByIdAndDelete(id);

  res.json(house);
});
// ADD a house
router.get("/houses/renthouse/:houseid/user/:userid", async (req, res) => {
  const { houseid, userid } = req.params;
  const userUpdated = await User.findByIdAndUpdate( userid, {$push:{houses:houseid}}, {new:true});
  console.log(userUpdated)
  res.status(204).json(userUpdated)
})

module.exports = router;
