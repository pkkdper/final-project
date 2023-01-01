const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const animalSchema = new Schema(
  {
    name: String,
    type: { type: String, enum: ["Dog", "Cat"] },
    size: { type: String, enum: ["Small", "Medium", "Big", "Giant"] },
    medical: String,
    passport: Boolean,
    vaccines: Boolean,
    picture: String
  }
);

const Animal = model("Animal", animalSchema);

module.exports = Animal;
