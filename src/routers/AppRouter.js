import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import NavBar from "../components/NavBar";
import AboutPage from "../pages/AboutPage";
import CategoriesPage from "../pages/CategoriesPage";
import ContactPage from "../pages/ContactPage";
import DashboardPage from "../pages/DashboardPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsPage from "../pages/PaymentsPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function AppRouter() {
  return (
    <div className="App">
     
      <Router>
        <NavBar />
        {/** Routes controla la renderizacion**/}
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route
            path="/categories/terror"
            element={<h1>categories terror</h1>}
          />
          <Route
            path="/categories/accion"
            element={<h1>categories accion</h1>}
          />
          <Route
            path="/categories/comedia"
            element={<h1>categories comedia</h1>}
          />

          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/payments"
            element={
              <PrivateRoute>
                <PaymentsPage />
              </PrivateRoute>
            }
          />

          <Route path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
