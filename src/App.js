import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Variedades from "./pages/Variedades";
import Lanches from "./pages/Lanches";
import Pizzas from "./pages/Pizzas";
import Doces from "./pages/Doces";
import Promo from "./pages/Promo";
import Carrinho from "./pages/Carrinho";
import Navbar from "../src/components/NavBar";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/variedades" element={<Variedades />} />
          <Route path="/lanches" element={<Lanches />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/doces" element={<Doces />} />
          <Route path="/promo" element={<Promo />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
