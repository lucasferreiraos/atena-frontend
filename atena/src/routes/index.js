import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentication from "../pages/Authentication/Authentication";
import ChooseProfile from "../pages/ChooseProfile/ChooseProfile";
import Form from "../components/Form";
import Dashboard from "../pages/Dashboard/Dashboard";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/choose-profile" element={<ChooseProfile />} />
        <Route path="/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};
