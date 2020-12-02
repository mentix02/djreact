import React, { useState } from "react";

import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logIn } from "../store/auth/actions";
import { Credentials, getToken } from "../api/auth";
import { useAuthenticated } from "../store/auth/hooks";

function Login() {
  const dispatch = useDispatch();
  const isAuthenticated = useAuthenticated();
  const [error, setError] = useState<string>("");
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const token = await getToken(credentials);
      dispatch(logIn(token, credentials.username));
    } catch (e: any) {
      setError(e.message);
    }
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <h2>Login Page</h2>
      {error.length !== 0 && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          onChange={(event) =>
            setCredentials({ ...credentials, username: event.target.value })
          }
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          onChange={(event) =>
            setCredentials({ ...credentials, password: event.target.value })
          }
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
