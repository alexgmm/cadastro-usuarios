import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading/Loading";
import SearchBar from "../../components/SearchBar/SearchBar";

import UserGrid from "../../components/UserGrid/UserGrid";
import api from "../../services/api";

function ListUsers() {
  const [users, setUsers] = useState([]);
  const [term, setTerm] = useState("");
  const [loading, setLoading] = useState(true);

  function fetchUsers() {
    api
      .get("/")
      .then((response) => {
        setLoading(false);
        setUsers(response.data);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    fetchUsers();
    return null;
  }, []);

  function renderContent() {
    if (loading) return <Loading />;
    else {
      if (users.length === 0) return <h2>Nenhum usuário cadastrado.</h2>;
      else
        return (
          <React.Fragment>
            <SearchBar setTerm={setTerm} />
            <UserGrid data={users} term={term} />
          </React.Fragment>
        );
    }
  }

  return <div className="container">{renderContent()}</div>;
}
export default ListUsers;
