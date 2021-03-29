import React from "react";
import { NavLink } from "react-router-dom";

import "./navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <div className="navbar-link">
        <NavLink to="/list">
          <h2>Listar usuários</h2>
        </NavLink>
      </div>
      <div className="navbar-link">
        <NavLink to="/insert">
          <h2>Cadastrar usuário</h2>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
