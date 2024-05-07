import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen pt-[135px] px-[75px] bg-gray-100">
      <h1 className="font-scoutcond font-black uppercase text-6xl py-4">
        Looks like you're lost!
      </h1>
      <p className="font-productsans text-xl">
        Use the navbar at the top to <a href="/">get back on track.</a>
      </p>
    </div>
  );
};

export default NotFound;
