import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsFillCartFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300">
      {/* <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>ChaSinSa</h1>
      </Link> */}
      <Link to="/" className="flex items-center text-4xl text-brand">
        <FiShoppingBag />
        <h1>ChaSinSa</h1>
      </Link>
      <nav>
        <Link to="/products">상품</Link>
        <Link to="/carts">
          <BsFillCartFill />
        </Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
      </nav>
      <button>Login</button>
    </header>
  );
}
