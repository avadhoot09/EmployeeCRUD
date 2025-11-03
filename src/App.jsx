import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Register from "./components/Register";
import EmployeeDashboard from "./components/EmployeeDashboard";
import EmployeeProfile from "./components/EmployeeProfile"; // ✅ Import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<EmployeeDashboard />} />
        <Route path="/employee/:id" element={<EmployeeProfile />} /> {/* ✅ Added */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
