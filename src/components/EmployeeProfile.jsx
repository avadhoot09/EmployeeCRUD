import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EmployeeProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
  });

  // Fetch employee details by ID (this is nothing but the input handler)
  useEffect(() => {
    axios
      .get(`http://localhost:8080/getById?id=${id}`)
      .then((response) => setEmployee(response.data))
      .catch(() => alert("Error fetching employee details."));
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  // Update employee data
  const handleUpdate = () => {
    axios
      .put("http://localhost:8080/update", employee)
      .then((response) => {
        alert("Employee updated successfully!");
        navigate("/"); // ✅ redirect back to dashboard
      })
      .catch(() => alert("Failed to update employee."));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-blue-300">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-96">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Edit Employee</h2>

        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
          placeholder="Name"
          className="border w-full mb-3 px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
          placeholder="Email"
          className="border w-full mb-3 px-3 py-2 rounded"
        />
        <input
          type="password"
          name="password"
          value={employee.password}
          onChange={handleChange}
          placeholder="Password"
          className="border w-full mb-3 px-3 py-2 rounded"
        />

        <button
          onClick={handleUpdate}
          className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded"
        >
          Update
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-gray-400 hover:bg-gray-500 text-white w-full py-2 rounded mt-3"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default EmployeeProfile;
