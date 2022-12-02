const { genSaltSync, compareSync, hashSync } = require("bcryptjs");
const User = require("../models/User.model");
const router = require("express").Router();
const jwt = require("jsonwebtoken");
const { isAuthenticated } = require("../middlewares/isAuthenticated");
const Animal = require("../models/Animal.model");
const uploader = require('../middlewares/cloudinary.config.js');

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  // encrypt password

  const salt = genSaltSync(11);
  const hashedPassword = hashSync(password, salt);

  // record to database

  const user = await User.create({ username, password: hashedPassword, email });
  res.status(201).json({ user });
});


router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const currentUser = await User.findOne({ username })
      


  if (currentUser) {
    // checking if password is correct
    if (compareSync(password, currentUser.password)) {
      const userCopy = { ...currentUser._doc };
      delete userCopy.hashedPassword;

      //  Generate token - JWT - (don't forget to put a secret in .env file)

      const authToken = jwt.sign(
        {
          expiresIn: "6h",
          userCopy,
        },
        process.env.TOKEN_SECRET,
        {
          algorithm: "HS256",
        }
      );

      res.status(200).json({ status: 200, token: authToken });
    } else {
      res.status(400).json({ message: "Wrong password" });
    }
  } else {
    res.status(404).json({ message: "No user with this username" });
  }
});


// router.get("/animals", async (req, res, next) => {
//   const animals = await Animal.find();

//   res.json(animals);
//   console.log(animals)
// });

// });


router.get("/profile/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
   .populate("animals houses").exec(function (err, results) {
    console.log(results)
    res.json(results);   
});

    // res.json(user);
} catch (error) {
    res.status(404).json();
  }
});

router.post("/profile/:id", async (req, res) => {
  const { username, email, name, surname, picture, location, age} = req.body;
  const { id } = req.params;

  // record to database

  const user = await User.findByIdAndUpdate(id, { username, name, email, surname, picture, location, age }, { new: true });
  res.status(201).json({ user });
});


router.post("/profile/update/:id", 
// uploader.single("imageUrl")
async (req, res) => {
  console.log("hi", req.body
  // , req.file
  )
//   const newObj = {}
//   for(const key in req.body) {
//     console.log(req.body.key, req.body[key])
// if (req.body[key] !== "undefined") {
//   newObj[key]=req.body[key]

// }
  // } 
  // newObj["picture"] = req.file.path
  // console.log("newobj", newObj)
  const { username, email, name, surname, picture, location, age} = req.body;
  console.log("age", age===undefined)
  console.log(age, req.body)
  let newAge
  if(age===undefined) {
    newAge=0
  } else {
    newAge=Number(age)
  }
  
  const { id } = req.params;

newObjUser={ username, email, name, surname, picture, location, age:newAge}
  // record to database

  const user = await User.findByIdAndUpdate(id, newObjUser, { new: true });
  console.log(user)
  res.status(201).json({ payload: {userCopy:user} });
});

router.post("/profile/update/:id/image", uploader.single("imageUrl"), async (req, res) => {
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
  const { username, email, name, surname, picture, location, age} = req.body;
  const { id } = req.params;


  // record to database

  const user = await User.findByIdAndUpdate(id, newObj, { new: true });
  console.log(user)
  res.status(201).json({ payload: {userCopy:user} });
});


router.post('/upload', uploader.single("imageUrl"), (req, res, next) => {
  // the uploader.single() callback will send the file to cloudinary and get you and obj with the url in return
  console.log('file is: ', req.file)
  
  if (!req.file) {
    console.log("there was an error uploading the file")
    next(new Error('No file uploaded!'));
    return;
  }
  
  // You will get the image url in 'req.file.path'
  // Your code to store your url in your database should be here
})


router.get("/verify", isAuthenticated, (req, res) => {
  // isAuthenticated middleware and made available on `req.payload`
  // console.log(`req.payload`, req.payload);

  // sending back the object with user data
  // previously set as the token payload
  console.log(req.payload)
  res.status(200).json({ payload: req.payload, message: "Token OK" });
});

module.exports = router;