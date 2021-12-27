import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "../pages/Login/Login";
import ChooseProfile from "../pages/ChooseProfile/ChooseProfile";
import Dashboard from "../pages/Dashboard/Dashboard";
import ListItems from "../components/ListItems/ListItems";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/choose-profile" element={<ChooseProfile />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/list-items" element={<ListItems />} />
        <Route path="/redefinir-senha" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
};
