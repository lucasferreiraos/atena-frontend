import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentication from "../pages/Authentication/Authentication";
import ChooseProfile from "../pages/ChooseProfile/ChooseProfile";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentication />} />
        <Route path="/choose-profile" element={<ChooseProfile />} />
        <Route path="/" /> 
      </Routes>
    </BrowserRouter>
  );
};
