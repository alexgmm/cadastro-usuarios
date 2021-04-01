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
        <Route exact path="/" component={ListUsers} />
        <Route exact path="/list" component={ListUsers} />
        <Route exact path="/insert" component={InsertUser} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
