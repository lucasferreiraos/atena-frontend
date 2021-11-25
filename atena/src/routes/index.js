import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentication from "../pages/Authentication/Authentication";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};
