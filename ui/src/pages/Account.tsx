import React from "react";

import { useUsername } from "../store/auth/hooks";

function Account() {
  const username = useUsername();

  return <h2>Welcome, {username}</h2>;
}

export default Account;
