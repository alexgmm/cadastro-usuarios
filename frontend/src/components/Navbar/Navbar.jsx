import React from "react";

import "./navbar.css";

function Navbar() {
  return (
    <div id="navbar">
      <div className="navbar-link">
        <h2>Listar usuários</h2>
      </div>
      <div className="navbar-link">
        <h2>Cadastrar usuário</h2>
      </div>
    </div>
  );
}

export default Navbar;
