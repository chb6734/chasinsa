import React from "react";

export default function Banner() {
  return (
    <section className="h-96 bg-black relative">
      <div className="w-full h-full bg-cover bg-banner opacity-50"></div>
      <div className="absolute w-full top-32  text-gray-50 drop-shadow-lg ">
        <h2 className="text-5xl font-banner text-center font-bold ">
          There is no beauty without strangeness.
        </h2>
        <p className=" font-banner text-right pr-10 pt-5 ">
          - Karl Lagerfeld -
        </p>
      </div>
    </section>
  );
}
