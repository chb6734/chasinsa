import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand py-2 text-white px-4 rounded-sm font-bold text-lg  hover:brightness-110"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
