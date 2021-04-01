import React from "react";

import InsertUserForm from "../../components/InserUserForm/InsertUserForm";
import api from "../../services/api";

function InsertUser() {
  function submit(user) {
    api.post("/", { user });
  }
  return (
    <div className="container">
      <InsertUserForm submit={submit} />
    </div>
  );
}

export default InsertUser;
