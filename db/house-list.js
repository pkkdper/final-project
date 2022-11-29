require("dotenv").config();
const mongoose = require("mongoose");
const House = require("../models/House.model");
require("./index");

let houses = [
  {
    name: "Beautiful apartment",
    location: "Peru",
    pricepernight: 50,
    maxnumberofdays: 7,
    rooms: 3,
    type: "Apartment",
    animaltype: "Dog",
    maxsizeofanimal: "Big",
    maxnumberofanimals: 3,
    /* photo: "picture", */
  },
  {
    name: "House for cats",
    location: "USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "House",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    /* photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Great flat to visit with your dog!",
    location: "Brazil",
    pricepernight: 40,
    maxnumberofdays: 3,
    rooms: 1,
    type: "Flat",
    animaltype: "Dog",
    maxsizeofanimal: "Small",
    maxnumberofanimals: 1,
    /*  photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Farm for Animals",
    location: "France",
    pricepernight: 100,
    maxnumberofdays: 5,
    rooms: 2,
    type: "Farm",
    animaltype: "Cat",
    maxsizeofanimal: "Giant",
    maxnumberofanimals: 2,
    /* photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Cat's room",
    location: "Italy",
    pricepernight: 15,
    maxnumberofdays: 10,
    rooms: 1,
    type: "Room",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 1,
    /*   photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Vacation house",
    location: "Nederlands",
    pricepernight: 80,
    maxnumberofdays: 10,
    rooms: 4,
    type: "House",
    animaltype: "Dog",
    maxsizeofanimal: "Big",
    maxnumberofanimals: 2,
    /*  photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Quiet Apartment",
    location: "Mexico",
    pricepernight: 30,
    maxnumberofdays: 14,
    rooms: 2,
    type: "Apartment",
    animaltype: "Cat",
    maxsizeofanimal: "Small",
    maxnumberofanimals: 2,
    /*  photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Nice flat",
    location: "Czech Republic",
    pricepernight: 20,
    maxnumberofdays: 8,
    rooms: 1,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Big",
    maxnumberofanimals: 3,
    /* photo: <img src="/housepictures/flat1.jpg"></img>, */
  },
  {
    name: "Farm for rent",
    location: "Canada",
    pricepernight: 90,
    maxnumberofdays: 10,
    rooms: 5,
    type: "Farm",
    animaltype: "Dog",
    maxsizeofanimal: "Giant",
    maxnumberofanimals: 6,
    /*   photo: "/housepictures/flat1.jpg", */
  },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
  // {
  //   name: "House for turtles",
  //   location: "Colorado, USA",
  //   pricepernight: 55,
  //   maxnumberofdays: 3,
  //   rooms: 2,
  //   type: "House",
  //   animaltype: "Cat",
  //   maxsizeofanimal: "Medium",
  //   maxnumberofanimals: 2,
  // },
];

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/final-project";
console.log(MONGO_URI);
mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
    House.insertMany(houses)
      .then((addedHouses) => {
        addedHouses.map((house) => console.log(house.name)); // to console.log each added name
      })
      .catch((err) => {
        console.log("Error with mongoose method", err);
      });
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

  House.insertMany(houses).then((addedHouses) => {
    const user = {email: 'tes@test.com',
    username: 'test',
    password: 'test',
    name: '',
    surname: '',
    location: '',
    age: 0,
    picture: '',
    animals: [],
    houses: addedHouses.map(house => house._id),
    }

    User.insertMany(user); 
  }).catch((err) => {
    console.log("Error with mongoose method", err);
  });
