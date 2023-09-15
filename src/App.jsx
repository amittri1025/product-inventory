import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";



function App() {

  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<ProductDetails/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
