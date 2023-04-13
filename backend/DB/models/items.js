const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  name: String,
  priceInCents: String,
  title: String,
  price: String,
  imageUrl: String,
  shortDescription: String,
  first: {
    title: String,
    desc: String,
  },
  second: {
    title: String,
    desc: String,
  },
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
