import React from "react";

const NotFound = () => {
  return ( //  TODO Add a pic of the goat for the lost screen
    <div className="h-screen pt-[135px] px-[75px] bgColor">
      <h1 className="font-scoutcond font-black uppercase text-6xl py-4 textColor">
        Looks like you're lost!
      </h1>
      <p className="font-productsans text-xl textColor">
        Use the navbar at the top to <a href="/">get back on track.</a>
      </p>
    </div>
  );
};

export default NotFound;
