import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
export default function PrivateRoute({ children }) {
  const location = useLocation();
  const auth = useAuth();
  return (
    <div>
      {auth.isLogged() ? (
        children
      ) : (
        <Navigate to={{ pathname: "/login", state: { from: location } }} />
      )}
    </div>
  );
}
