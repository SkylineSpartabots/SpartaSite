import React, { useState } from "react";
import { Helmet } from "react-helmet"
const Purchase = () => {
  const [isIframeOpen, setIframeOpen] = useState(false);

  const openIframe = () => {
    setIframeOpen(true);
  };

  const closeIframe = () => {
    setIframeOpen(false);
  };

  return (
    <>
    <Helmet>
        <script
          src="https://niutech.github.io/x-frame-bypass/x-frame-bypass.js"
          crossorigin="anonymous"
          async
        ></script>
      </Helmet>
    <div className="h-screen pt-[135px] px-[75px] bg-gray-100 flex flex-col items-center justify-center">
      <div className="mt-8 flex flex-col items-center gap-4">
        {/* Sign In Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={openIframe}
        >
          Sign Into Payment Portal
        </button>
        <p className="text-center text-gray-600 text-sm">
          Sign in if you are a student/parent within ISD OR have made a guest account OR have made a purchase through ISD before.
        </p>

        {/* Sign Up Button */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
          onClick={() => {
            // Handle Sign Up logic
          }}
        >
          Make Payment Account
        </button>
        <p className="text-center text-gray-600 text-sm">
          Sign up if you are attempting to purchase merch/items outside of ISD.
        </p>
      </div>

      {/* Iframe */}
      {isIframeOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="relative bg-white p-4 rounded-md">
            <button
              className="absolute top-0 right-0 p-2 cursor-pointer"
              onClick={closeIframe}
            >
              X
            </button>
            <iframe
              is="x-frame-bypass" 
              src="https://wa-issaquah.intouchreceipting.com/"
              title="Payment Portal"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default Purchase;
