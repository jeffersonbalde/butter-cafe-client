import React from "react";
import logo from "./assets/images/logo.png";
import brown_butter_cafe from "./assets/images/menu.jpg";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Brown Butter Cafe Logo"
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-gray-800 hidden sm:block">
              Brown Butter Cafe
            </span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-6 text-gray-600">
            <a href="#menu" className="hover:text-gray-900">
              Menu
            </a>
            <a href="#specialties" className="hover:text-gray-900">
              Specialties
            </a>
            <a href="#contact" className="hover:text-gray-900">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with fixed image size */}
      <main className="flex-grow flex items-center justify-center">
        <div className="relative w-full flex justify-center">
          <img
            src={brown_butter_cafe}
            alt="Cafe Menu"
            className="
              w-full max-w-3xl   /* keeps menu from being too wide */
              h-auto            /* auto height for proportions */
              object-contain    /* shows the whole menu without cropping */
              p-4
              rounded-lg shadow-lg bg-white
            "
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white py-4 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Brown Butter Cafe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
