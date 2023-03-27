import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsFillCartFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      {/* <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>ChaSinSa</h1>
      </Link> */}
      <Link to="/" className="flex items-center text-4xl text-brand font-title">
        <h1>CHASINSA</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products" className="text-navText text-xl">
          상품
        </Link>
        <Link to="/carts" className="text-navText text-2xl">
          <BsFillCartFill />
        </Link>
        <Link to="/products/new" className="text-navText text-2xl">
          <BsFillPencilFill />
        </Link>
        <button className="text-xl">Login</button>
      </nav>
    </header>
  );
}
