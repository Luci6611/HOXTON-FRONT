import React from "react";
import { Routes, Route } from "react-router-dom";


// import HomeScreen from "../pages/HomeScreen";

const RoutesDos = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
   
    </Routes>
  );
};

export default RoutesDos;
