// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");
const app = require("./app");

// ℹ️ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 5005
const PORT = process.env.PORT || 5005;

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =  "mongodb+srv://oliwia1:BF8WK3UNDjy8W6n@cluster0.jbrejzs.mongodb.net/?retryWrites=true&w=majority"

  //"mongodb+srv://user1:NfJGQGrvEsBBFMZA@cluster07.bnum0b9.mongodb.net/test?retryWrites=true&w=majority";
  // mongodb+srv://<username>:<password>@cluster0.qigf07j.mongodb.net/?retryWrites=true&w=majority
  // process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/final-project";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    const dbName = x.connections[0].name;
    console.log(`Connected to Mongo! Database name: "${dbName}"`);
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
