import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function NavBar() {
  const auth = useAuth();
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/profile/sergiocastillo">Profile User</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        {!auth.isLogged() && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
        {auth.isLogged() && (
          <>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/payments">Payments</NavLink>
            </li>

            <li>
              <button onClick={auth.logout}>Logout</button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
