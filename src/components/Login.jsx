import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://employeecrud-2.onrender.com/login", loginForm)
      .then((res) => {
        if (res.data) {
          navigate("/dashboard");
        } else {
          alert("Invalid credentials");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong");
      });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80')] 
        bg-cover bg-center opacity-30"
      ></div>

      {/* Glassmorphism login card */}
      <form
        onSubmit={login}
        className="relative z-10 flex flex-col gap-5 p-10 w-96 rounded-3xl backdrop-blur-xl bg-white/20 shadow-2xl border border-white/30 transition-all duration-500 hover:scale-[1.02]"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-2 drop-shadow-md">
          Employee Login
        </h2>
        <p className="text-center text-blue-100 mb-4 text-sm">
          Welcome back! Please enter your details to continue.
        </p>

        <div className="flex flex-col text-white">
          <label className="font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={loginForm.email}
            onChange={inputHandler}
            placeholder="Enter your email"
            className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            required
          />
        </div>

        <div className="flex flex-col text-white">
          <label className="font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={inputHandler}
            placeholder="Enter your password"
            className="p-3 rounded-lg border border-white/30 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold p-3 rounded-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl"
        >
          Login
        </button>

        <p className="text-center text-blue-100 text-sm mt-4">
          Don’t have an account?{" "}
          <Link
            to={'/register'}
            className="text-white underline hover:text-blue-200 transition"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
