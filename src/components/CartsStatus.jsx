import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";
import useCart from "../hooks/useCarts";

export default function CartsStatus() {
  const { uid } = useAuthContext();
  const {
    cartQuery: { data: products },
  } = useCart();
  return (
    <div className="relative">
      <BsFillCartFill className="text-4xl" />
      {products && (
        <p className="w-6 h-6 text-center text-lg bg-red-400 text-white font-bold rounded-full absolute -top-1 -right-2">
          {products.length}
        </p>
      )}
    </div>
  );
}
