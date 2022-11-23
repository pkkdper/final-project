const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const houseSchema = new Schema({
  location: String,
  price: Number,
  maxnumberofdays: Number,
  rooms: Number,
  type: String,
  animaltype: String,
  maxsizeofanimal: String,
  maxnumberofanimals: Number
});

const House = model("House", houseSchema);

module.exports = House;
