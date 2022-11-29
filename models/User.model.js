const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: String,
    surname: String,
    location: String,
    age: Number,
    picture: String,
    animals: [{ type: Schema.Types.ObjectId, ref: "Animal" }],
    houses: [{ type: Schema.Types.ObjectId, ref: "House" }],
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
