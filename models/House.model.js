const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const houseSchema = new Schema({
  name: String,
  location: String,
  pricepernight: Number,
  maxnumberofdays: Number,
  rooms: Number,
  type: { type: String, enum: ["House", "Apartment", "Flat", "Farm", "Room"] },
  animaltype: { type: String, enum: ["Dog", "Cat"] },
  maxsizeofanimal: { type: String, enum: ["Small", "Medium", "Big", "Giant"] },
  maxnumberofanimals: Number,
  photo: String,
});

const House = model("House", houseSchema);

module.exports = House;
