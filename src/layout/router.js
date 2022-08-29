import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Home } from "../modules";

export const MainRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
