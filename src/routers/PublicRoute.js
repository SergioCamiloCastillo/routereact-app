import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
export default function PublicRoute({ children }) {
  const auth = useAuth();
  return (
    <div>{!auth.isLogged() ? children : <Navigate to="/dashboard" />}</div>
  );
}
