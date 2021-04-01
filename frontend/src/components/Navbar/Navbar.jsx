import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <NavLink to="/list" activeClassName="active">
        <div className="navbar-link">
          <h2>Listar usuários</h2>
        </div>
      </NavLink>
      <NavLink to="/insert" activeClassName="active">
        <div className="navbar-link">
          <h2>Cadastrar usuário</h2>
        </div>
      </NavLink>
    </div>
  );
}

export default Navbar;
