import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { createRef } from "react";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Apparel from "./components/Apparel";
import Supplements from "./components/Supplements";
import Contact from "./components/Contact";
import Success from "./components/Success";
import axios from "axios";

export default function App() {
  const [cart, setCart] = React.useState({});

  async function handleClick(event) {
    const itemAdded = event.currentTarget.id;
    const res = await axios.get(
      `http://localhost:8000/supplements/${itemAdded}`
    );
    const { priceInCents, name, price, title, imageUrl } = res.data;

    let cartCopy = Object.assign({}, cart);
    if (cart[name]) {
      cartCopy[name].count += 1;
    } else {
      cartCopy[name] = { price: price, count: 1 };
    }

    setCart(cartCopy);

    console.log(cart);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home handleClick={handleClick} />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="get-in-touch" element={<Contact />} />
            <Route path="success" element={<Success />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
