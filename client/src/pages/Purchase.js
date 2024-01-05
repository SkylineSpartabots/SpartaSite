import React from "react";

const Purchase = () => {
  const openIframe = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen pt-[135px] px-[75px] bg-gray-100 flex flex-col items-center justify-center">
      <div className="mt-8 flex flex-col items-center gap-4">
        {/* Sign In Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => openIframe("https://wa-issaquah.intouchreceipting.com")}
        >
          Sign Into Payment Portal
        </button>
        <p className="text-center text-gray-600 text-sm">
          Sign in if you are a student/parent within ISD OR have made a guest account OR have made a purchase through ISD before.
        </p>

        {/* Sign Up Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => openIframe("https://wa-issaquah.intouchreceipting.com/signup")}
        >
          Make Payment Account
        </button>
        <p className="text-center text-gray-600 text-sm">
          Sign up if you are attempting to purchase merch/items outside of ISD.
        </p>
      </div>
    </div>
  );
};

export default Purchase;
