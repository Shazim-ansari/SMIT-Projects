import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white sticky top-0">
      <h1 className="text-xl font-bold">Shopping Cart</h1>
      <div>
        <Link to="/" className="mr-4">Products</Link>
        <Link to="/cart" className="bg-blue-500 px-3 py-2 rounded">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;