import React from "react";

import "./searchbar.css";

function SearchBar({ setTerm }) {
  return (
    <div id="searchbar-container">
      <input
        type="text"
        id="searchbar"
        placeholder="Pesquisar por nome"
        onChange={(e) => setTerm(e.target.value)}
      />
    </div>
  );
}
export default SearchBar;
