import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home, Portfolio, Qoute } from "../modules";

export const MainRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/qoute" element={<Qoute />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
