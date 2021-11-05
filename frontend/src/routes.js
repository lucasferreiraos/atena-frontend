import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/login";
import Register from "./pages/register";
import FormRegister from "./pages/register/form";

import Home from "./pages/academicCenter/home";
import ListProfessor from "./pages/academicCenter/list";


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/register/form" exact component={FormRegister} />
        <Route path="/home" exact component={Home} />
        <Route paht="/professors" exact component={ListProfessor} />
      </Switch>
    </BrowserRouter>
  )
};
