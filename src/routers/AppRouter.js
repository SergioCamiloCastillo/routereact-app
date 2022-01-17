import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
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

export default function AppRouter() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        {/** Routes controla la renderizacion**/}
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories" element={<CategoriesPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route path="/payments" element={<PrivateRoute />} />

          <Route path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
