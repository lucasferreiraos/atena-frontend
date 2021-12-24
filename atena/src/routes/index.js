import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Authentication from "../pages/Authentication/Authentication";
import ChooseProfile from "../pages/ChooseProfile/ChooseProfile";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListItems from "../components/ListItems/ListItems";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authentication />} />
        <Route path="/choose-profile" element={<ChooseProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="list-items" element={<ListItems />} />
      </Routes>
    </BrowserRouter>
  );
};
