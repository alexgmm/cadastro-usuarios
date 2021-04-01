import React from "react";
import { useHistory, withRouter } from "react-router-dom";

import InsertUserForm from "../../components/InserUserForm/InsertUserForm";
import api from "../../services/api";

function InsertUser() {
  const history = useHistory();
  function submit(user) {
    api.post("/", { user }).then((response) => {
      history.push("/list");
    });
  }
  return (
    <div className="container">
      <InsertUserForm submit={submit} />
    </div>
  );
}

export default withRouter(InsertUser);
