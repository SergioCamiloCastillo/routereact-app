import React from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../auth/useAuth";
export default function PrivateRoute({ children }) {
  const auth = useAuth();

  return <div>{auth.isLogged() ? children : <Navigate to="/login" />}</div>;
}
