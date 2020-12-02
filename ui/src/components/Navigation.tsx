import React from "react";
import "./styles/Navigation.css";

import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import { logOut } from "../store/auth/actions";
import { useAuthenticated } from "../store/auth/hooks";

function Navigation() {
  const dispatch = useDispatch();
  const isAuthenticated = useAuthenticated();

  return (
    <ul>
      <li>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
      </li>
      {isAuthenticated ? (
        <>
          <li>
            <NavLink activeClassName="active" to="/account">
              Account
            </NavLink>
          </li>
          <li>
            <span className="link" onClick={() => dispatch(logOut())}>
              Logout
            </span>
          </li>
        </>
      ) : (
        <li>
          <NavLink activeClassName="active" to="login">
            Sign In
          </NavLink>
        </li>
      )}
    </ul>
  );
}

export default Navigation;
