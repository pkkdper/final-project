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
    picture: {type: String, default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.lewesac.co.uk%2Fabout-us%2Fcoaches-leaders%2Fattachment%2Fdefault-avatar&psig=AOvVaw22ZPLu-sMO2wHMzmtnOmPB&ust=1670018374900000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKCDy7G12fsCFQAAAAAdAAAAABAE"},
    houses: [{ type: Schema.Types.ObjectId, ref: "House" }],
    animals: [{
      type: Schema.Types.ObjectId,
      ref:"Animal"
    }]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
