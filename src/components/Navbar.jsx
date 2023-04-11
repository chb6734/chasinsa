import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill, BsFillCartFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";
import Button from "./ui/Button";

export default function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);

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
        {user && !user.isAdmin && (
          <Link to="/carts" className="text-navText text-2xl">
            <BsFillCartFill />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-navText text-2xl">
            <BsFillPencilFill />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && (
          <Button text={"Login"} onClick={login}>
            Login
          </Button>
        )}
        {user && (
          <Button text={"Logout"} onClick={logout}>
            Logout
          </Button>
        )}
      </nav>
    </header>
  );
}
