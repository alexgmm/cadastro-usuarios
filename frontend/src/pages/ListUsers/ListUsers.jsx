import React, { useState, useEffect } from "react";

import UserGrid from "../../components/UserGrid/UserGrid";
import api from "../../services/api";

function ListUsers() {
  const [users, setUsers] = useState([]);

  function fetchUsers() {
    api
      .get("/")
      .then((response) => setUsers(response.data))
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    fetchUsers();
    return null;
  }, []);

  return (
    <div className="container">
      <UserGrid data={users} />
    </div>
  );
}
export default ListUsers;
