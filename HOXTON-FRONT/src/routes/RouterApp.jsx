import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginScreen from "../pages/LoginScreen";
import ProtectedRoutes from "./ProtectedRoutes";
import RoutesDos from "../routes/RouterDos";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoutes>
              <RoutesDos />
            </ProtectedRoutes>
          }
        />
        <Route path="/login" element={<LoginScreen />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;