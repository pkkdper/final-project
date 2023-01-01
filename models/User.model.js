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
    picture: {type: String, default: "https://www.lewesac.co.uk/wp-content/uploads/2017/12/default-avatar.jpg"},
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
