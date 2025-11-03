import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-auto py-6 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-semibold">Employee Management</h2>
          <p className="text-gray-400 text-sm">© 2025 All rights reserved</p>
        </div>

        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
          <a href="#services" className="hover:text-amber-400 transition-colors">Services</a>
          <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
        </div>

        <div className="flex space-x-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
