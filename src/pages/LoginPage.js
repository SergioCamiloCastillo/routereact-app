import React from "react";
import { useLocation, useNavigate } from "react-router";
import useAuth from "../auth/useAuth";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const auth = useAuth();
  const handleLogin = () => {
    auth.login();
    navigate("/dashboard");
  };
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
