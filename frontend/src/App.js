import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Apparel from "./components/Apparel";
import Supplements from "./components/Supplements";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/apparel" element={<Apparel />} />
            <Route path="/supplements" element={<Supplements />} />
            <Route path="get-in-touch" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
