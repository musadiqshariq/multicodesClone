import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../modules";

export const MainRouting = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
