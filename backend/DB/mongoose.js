const mongoose = require("mongoose");
var constants = require("../consts");
const Item = require('./models/items');

const uri = `mongodb+srv://administrator:${constants.password}@cluster0.eigrail.mongodb.net/?retryWrites=true&w=majority`;

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to database successfully");
  } catch (err) {
    console.error(err);
  }
}

connect();

//Item.insertMany(constants.itemsArray).then((items) => {
//    console.log(items);
//});