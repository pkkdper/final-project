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
    photo:
      "https://images.unsplash.com/photo-1529408632839-a54952c491e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
    photo:
      "https://images.pexels.com/photos/2459/stairs-home-loft-lifestyle.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
    photo:
      "https://images.unsplash.com/photo-1600457008548-8a153e914616?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1590725175785-de025cc60835?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1486304873000-235643847519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
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
    photo:
      "https://images.unsplash.com/photo-1603951743220-867ee4ae77d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
  },
  {
    name: "House in Colorado",
    location: "Colorado, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "House",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Flat in the city ",
    location: "Texas, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1464890100898-a385f744067f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Big flat",
    location: "New York, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "Flat",
    location: "San Francisco, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Duplex",
    location: "New York, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1628745750116-d4e990e4481a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  {
    name: "Medium Flat",
    location: "California, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1582582494705-f8ce0b0c24f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
  },
  {
    name: "Big House",
    location: "Colorado, USA",
    pricepernight: 55,
    maxnumberofdays: 3,
    rooms: 2,
    type: "Flat",
    animaltype: "Cat",
    maxsizeofanimal: "Medium",
    maxnumberofanimals: 2,
    photo:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
];
// House.insertMany(houses).then((addedHouses) => {
//     const user = {email: 'tes@test.com',
//     username: 'test',
//     password: 'test',
//     name: '',
//     surname: '',
//     location: '',
//     age: 0,
//     picture: '',
//     animals: [],
//     houses: addedHouses.map(house => house._id),
//     }

//     User.insertMany(user);
//   }).catch((err) => {
//     console.log("Error with mongoose method", err);

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/final-project";
console.log(MONGO_URI);
mongoose.connect(MONGO_URI).then((x) => {
  const dbName = x.connections[0].name;
  console.log(`Connected to Mongo! Database name: "${dbName}"`);
  House.insertMany(houses)
    .then((addedHouses) => {
      addedHouses.map((house) => console.log(house.name)); // to console.log each added name
    })
    .catch((err) => {
      console.log("Error with mongoose method", err);
    });
});
