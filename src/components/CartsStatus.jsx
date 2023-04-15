import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BsFillCartFill } from "react-icons/bs";
import { useAuthContext } from "../context/AuthContext";
import { getCart } from "../api/firebase";

export default function CartsStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery(["carts"], () => getCart(uid));
  return (
    <div>
      <BsFillCartFill />
      {products && <p>{products.length}</p>}
    </div>
  );
}
