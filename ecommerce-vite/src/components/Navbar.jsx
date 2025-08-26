import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <h1 className="text-white font-bold text-xl">E-commerce</h1>

        {/* Links */}
        <div className="flex space-x-4">
          <Link
            to="/"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Products
          </Link>
          <Link
            to="/cart"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Cart
          </Link>
          <Link
            to="/checkout"
            className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition"
          >
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
