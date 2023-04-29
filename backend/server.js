const express = require("express");
const Item = require("./DB/models/items");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
require("./DB/mongoose");
require("dotenv").config();

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  methods: "GET, POST",
};

app.listen(8000, () => {
  console.log("Server started on port 8000");
});

app.use(cors(corsOptions)); // enable cross-origin support
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY);

app.post("/create-checkout-session", async (req, res) => {
  try {
    var lineItems = []
    console.log(req.body)
    Object.keys(req.body.items).forEach(function (key) {
        lineItems.push( { price_data: {  
          currency: 'usd',
          product_data: {
            name: key
          }, 
          unit_amount: req.body.items[key].priceInCents
        },
        quantity: req.body.items[key].count
       } )
    })
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: `${process.env.FRONTEND_URL}/success`,
      cancel_url: `${process.env.FRONTEND_URL}`,
    });
    res.json({ url: session.url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

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
  Item.findOne({ name: req.params.id })
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
