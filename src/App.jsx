import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Service from "./pages/service/Service";
import Portfolio from "./pages/portfolio/Portfolio";
import Contact from "./pages/contact/Contact";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;