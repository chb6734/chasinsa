import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addUpdateToCart, removeFromCart } from "../api/firebase";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-red-500 hover:scale-100 mx-1 ";
export default function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };
  const handlePlus = () =>
    addUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  const handleDelete = () => removeFromCart(uid, id);
  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg ml-4" src={image} alt={title} />
      <div className="flex-1 flex justify-between mx-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-red-500">{option}</p>
          <p className="text-lg font-bold">₩{price * quantity}</p>
        </div>
        <div className="text-2xl flex items-ce">
          <AiOutlineMinusSquare className={ICON_CLASS} onClick={handleMinus} />
          <span>{quantity}</span>
          <AiOutlinePlusSquare className={ICON_CLASS} onClick={handlePlus} />
          <RiDeleteBin5Fill className={ICON_CLASS} onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
