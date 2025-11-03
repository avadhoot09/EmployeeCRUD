import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EmployeeDashboard() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate(); // ✅ Correct usage

  // Fetch employees
  useEffect(() => {
    axios
      .get("http://localhost:8080/getAll")
      .then((response) => setEmployees(response.data))
      .catch(() =>
        console.error("Something went wrong while fetching employees.")
      );
  }, []);

  // Delete employee
  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/delete?id=${id}`)
      .then((response) => {
        if (response.data === true) {
          alert("Employee deleted successfully!");
          setEmployees((prev) => prev.filter((emp) => emp.id !== id)); // remove from UI
        } else {
          alert("Employee deletion failed!");
        }
      })
      .catch(() =>
        console.error("Something went wrong while deleting the employee.")
      );
  };

  // ✅ FIXED: Navigate properly to employee profile
  const updateEmployee = (id) => {
    navigate(`/employee/${id}`); // matches your App.js route
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-blue-300 py-10 px-6 flex flex-col items-center">
      <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-blue-100 p-8 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6 text-center">
          👥 Employee Dashboard
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Manage and view all registered employees in one place.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <tr>
                <th className="p-4 rounded-tl-xl">#</th>
                <th className="p-4">ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Email</th>
                <th className="p-4">Password</th>
                <th className="p-4 rounded-tr-xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.length > 0 ? (
                employees.map((emp, index) => (
                  <tr
                    key={emp.id}
                    className="hover:bg-blue-50 border-b border-blue-100 transition-all duration-200"
                  >
                    <td className="p-4 font-semibold text-gray-700">{index + 1}</td>
                    <td className="p-4 text-gray-600">{emp.id}</td>
                    <td className="p-4 text-gray-700 font-medium">{emp.name}</td>
                    <td className="p-4 text-gray-600">{emp.email}</td>
                    <td className="p-4 text-gray-500">{emp.password}</td>
                    <td className="p-4 flex gap-2">
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => updateEmployee(emp.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      >
                        Show
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center py-8 text-gray-500">
                    ⏳ Loading employees or none found...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDashboard;
