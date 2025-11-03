import React from "react";
import WelcomeMenu from "./WelcomeMenu";
import Footer from "./Footer";

function Welcome() {
  return (
    <div className="flex flex-col min-h-screen relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 text-white overflow-hidden">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1920&q=80')] 
        bg-cover bg-center opacity-25"
      ></div>

      {/* Header / Navbar */}
      <div className="relative z-10">
        <WelcomeMenu />
      </div>

      {/* Main Section */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-4 md:px-8 py-16 animate-fadeIn">
       

        <h1 className="text-4xl md:text-5xl font-extrabold mt-10 mb-4 drop-shadow-md">
          Welcome to Employee Management System
        </h1>

        <p className="text-blue-100 text-lg max-w-2xl">
          Manage your employees efficiently, boost productivity, and stay
          organized — all in one smart platform.
        </p>

        <button
          onClick={() => (window.location.href = "/login")}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl text-white font-semibold text-lg shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-xl"
        >
          Get Started 🚀
        </button>
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
