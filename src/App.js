import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/NavBar/NavBar.js";
import { Store } from "./components/MoviePage/MoviePage.js";
import CheckOut from "./components/CheckOut/CheckOut.js";
import MainPage from "./components/MainPage/MainPage.js";
import FallingLeaves from "./components/FallingLeaves/FallingLeaves";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Router>
          <Navbar />
          <FallingLeaves />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/movies" element={<Store />} />
            <Route path="/checkout" element={<CheckOut />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </>
  );
};

export default App;
