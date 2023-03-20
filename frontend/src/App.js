import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import NoPage from "./components/NoPage";
import Layout from "./components/Layout";
import Home from "./components/Home";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
