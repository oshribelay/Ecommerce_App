const express = require("express");
const Item = require("./DB/models/items");
const app = express();
const cors = require("cors");
require("./DB/mongoose");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: "GET, POST"
};

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.use(cors(corsOptions))

app.get("/supplements", (req, res) => {
  // this route fetches all the items in the item collection
  Item.find({})
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get("/supplements/:id", (req, res) => {
  // this route takes an item id in the URL and fetches the item that corresponds with that id
  Item.findOne({ _id: req.params.id })
    .then((items) => {
      if (!items) {
        return res.status(404).send();
      }
      res.send(items);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});
