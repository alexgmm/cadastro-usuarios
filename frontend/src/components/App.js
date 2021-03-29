import React from "react";
import { Route, Switch } from "react-router";

import "./App.css";
import Navbar from "./Navbar/Navbar";
import ListUsers from "../pages/ListUsers/ListUsers";
import InsertUser from "../pages/InsertUser/InsertUser";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/list" component={ListUsers} />
        <Route path="/insert" component={InsertUser} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
