import React from "react";
import { Link } from "react-router-dom";

function WelcomeMenu() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-md">
      <div className="text-2xl font-bold">Employee Management System</div>
      <div className="space-x-4">
        <Link to="/register">
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Register
          </button>
        </Link>
        <Link to="/login">
          <button className="px-4 py-2 bg-green-600 rounded-lg hover:bg-green-700 transition">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default WelcomeMenu;
